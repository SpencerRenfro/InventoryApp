import { useState, useEffect } from "react";

//components
import Results from "./Results";
import CheckedIn from "./CheckedIn";
import CheckedOut from "./CheckedOut";
import TotalAssetValue from "./TotalAssetValue";
import Searchbar from "../Searchbar";
import Table from "./Table";
import FilterInventory from "./FilterInventory";
//icons
import next from "../../assets/icons/next.svg";
// import FilterInventory from "./FilterInventory";


function Inventory({
  inventoryItems,
  setShowModal,
  categoryFilter,
  modalHandler,
}) {
  const [totalAssetValue, setTotalAssetValue] = useState(0);
  const [checkedIn, setCheckedIn] = useState(0);
  const [checkedOut, setCheckedOut] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  //for changing filter. This uses useState and a function to change the state. This function is passed to the FilterInventory component,
  // and the on change event is handling the value change.
  // "" is the default value for no filter
  const [filter, setFilter] = useState("");


  useEffect(() => {
    console.log('filter changed', filter);
  }, [filter]);

  useEffect(() => {
    let totalPrice = 0;
    let totalItems = 0;
    let checkedInCount = 0;
    let checkedOutCount = 0;
    let categories = [""];
    if (filter === "") {
      inventoryItems.forEach((item) => {
        totalItems++;
        if (!isNaN(parseFloat(item.price))) {
          totalPrice += parseFloat(item.price);
        }
        if (item.status === "IN") {
          checkedInCount++;
        } else if (item.status === "OUT") {
          checkedOutCount++;
        }
        if (item.category && !categories.includes(item.category)) {
          categories.push(item.category);
          console.log("categories:", categories);
        }
      });
    } else {
      let filteredItems = inventoryItems.filter(
        (item) => item.category === filter
      );
      filteredItems.forEach((item) => {
        totalItems++;
        if (!isNaN(parseFloat(item.price))) {
          totalPrice += parseFloat(item.price);
        }
        if (item.status === "IN") {
          checkedInCount++;
        } else if (item.status === "OUT") {
          checkedOutCount++;
        }
      });
    }
    setTotalAssetValue(totalPrice);
    setCheckedIn(checkedInCount);
    setCheckedOut(checkedOutCount);
    setItemCount(totalItems);
    console.log('total price:', totalPrice);
    console.log('checked in:', checkedInCount);
    console.log('checked out:', checkedOutCount);
    console.log('total items:', totalItems);
  }, [inventoryItems, checkedIn, checkedOut, filter]);

  return (
    <div className="grid grid-cols-12 mx-40 mt-10">
      <h1 className="col-start-1 col-span-12 font-bold text-3xl text-black my-10">
        Inventory
      </h1>

      <div className="col-span-7">
        <Searchbar />
      </div>
      <FilterInventory filter={filter} setFilter={setFilter}  />
      <div className="col-span-12 -4 h-20">
        <div className="flex gap-7">
          <Results itemCount={itemCount} />
          <CheckedIn checkedIn={checkedIn}/>
          <CheckedOut checkedOut={checkedOut}/>
          <TotalAssetValue totalAssetValue={totalAssetValue}/>
        </div>
      </div>
      <div className="col-span-12">
        <Table
          inventoryItems={inventoryItems}
          categoryFilter={filter}
        />
      </div>
    </div>
  );
}

export default Inventory;
