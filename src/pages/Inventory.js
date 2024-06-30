//hooks
import { useContext, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";


//components
import Table from "../components/Table";
import InventorySkeleton from "../components/skeleton/InventorySkeleton";

//reducers
import { CategoryContext } from "../reducers/CategoryContext";

function Inventory(props) {
  const { data, isPending, error } = useFetch("http://localhost:8000/inventory");
  const category = useContext(CategoryContext);

  useEffect(() => {
    if(data){
      console.log('DATA:', data)

    const inventory = [
      {
      Title: "INVENTORY_ITEMS",
      ...data
      },
      {
        Title: "CATEGORIES",
        categories: data.map((item) => item.category)
      }
  ]
    console.log('INVENTORY:', inventory)

    }
  }, [data]);

  return (
    <div className="dark:bg-slate-900 dark:text-slate-300">

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <div><Table inventory={data} setShowModal={props.setShowModal}  categoryFilter={props.categoryFilter} modalHandler={props.modalHandler}/> </div>}
      {!data && !isPending && <InventorySkeleton />}
      {console.log('CATEGORY FROM USECONTEXT:', category)}
      {/* <InventorySkeleton /> */}
    </div>
  );
}

export default Inventory;
