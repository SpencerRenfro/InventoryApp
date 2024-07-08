import { useContext, useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import Table from "../components/Table";
import InventorySkeleton from "../components/skeleton/InventorySkeleton";
import { CategoryContext } from "../reducers/CategoryContext";

function Inventory(props) {
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [checkedIn, setCheckedIn] = useState(0);
  const [checkedOut, setCheckedOut] = useState(0);
  const [totalValue, setTotalValue] = useState(0);

  const { data, isPending, error, refetch } = useFetch(`http://localhost:8000/inventory`);
  const category = useContext(CategoryContext);

  const nextPage = () => {
    if (currentPage < pageCount){
      setCurrentPage(prevPage => prevPage + 1);
    }

  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  // useEffect(() => {
  //   refetch(`http://localhost:8000/inventory?_page=${currentPage}&_limit=1`);

  // }, [currentPage, refetch]);

  useEffect(() => {
    let totalCost = 0;
    let checkedInCount = 0;
    let checkedOutCount = 0;

    if (data) {
      if (props.categoryFilter === "") {
        data.forEach((item) => {
          if (!isNaN(parseFloat(item.price))) {
            totalCost += parseFloat(item.price);
          }
          if (item.status === "IN") {
            checkedInCount++;
          } else if (item.status === "OUT") {
            checkedOutCount++;
          }
        });
      } else {
        let filteredItems = data.filter(
          (item) => item.category === props.categoryFilter
        );
        filteredItems.forEach((item) => {
          if (!isNaN(parseFloat(item.price))) {
            totalCost += parseFloat(item.price);
          }
          if (item.status === "IN") {
            checkedInCount++;
          } else if (item.status === "OUT") {
            checkedOutCount++;
          }
        });
        console.log('Inventory Data:', data);
      }

      setTotalItems(data.length);
      setTotalValue(totalCost);
      setCheckedOut(checkedOutCount);
      setCheckedIn(checkedInCount);

      // Calculate pageCount based on data.length and a fixed per-page limit (e.g., 1 item per page)
      const perPage = 10; // Adjust as per your pagination needs
      const calculatedPageCount = Math.ceil(data.length / perPage);
      setPageCount(calculatedPageCount);
      console.log('calculatedPageCount:', calculatedPageCount);
    }
  }, [data, category.categoryFilter, props.categoryFilter]);

  return (
    <div className="dark:bg-slate-900 dark:text-slate-300">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <div>
          <Table
            setShowModal={props.setShowModal}
            categoryFilter={props.categoryFilter}
            modalHandler={props.modalHandler}
            prevPage={prevPage}
            nextPage={nextPage}
            currentPage={currentPage}
            totalItems={totalItems}
            totalValue={totalValue}
            checkedIn={checkedIn}
            checkedOut={checkedOut}
            pageCount={pageCount}
          />
          <div>
            <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
            <button onClick={nextPage}>Next Page</button>
          </div>
        </div>
      )}
      {!data && !isPending && <InventorySkeleton />}
    </div>
  );
}

export default Inventory;
