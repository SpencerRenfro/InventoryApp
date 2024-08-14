import { useState, useEffect } from "react";

//components
import Results from "./Results";
import CheckedIn from "./CheckedIn";
import CheckedOut from "./CheckedOut";
import TotalAssetValue from "./TotalAssetValue";
import Searchbar from "../Searchbar";
import Table from "./Table";
import FilterInventory from "./FilterInventory";
import Pagination from "../../ui/pagination/Pagination";

export default function Inventory({ inventoryItems, categoryItems }) {
  //inventory data states
  const [totalAssetValue, setTotalAssetValue] = useState(0);
  const [checkedIn, setCheckedIn] = useState(0);
  const [checkedOut, setCheckedOut] = useState(0);
  const [itemCount, setItemCount] = useState(0);

  //for changing filter. This uses useState and a function to change the state. This function is passed to the FilterInventory component,
  // and the on change event is handling the value change.
  // "" is the default value for no filter
  const [filter, setFilter] = useState("");

  useEffect(() => {
    let totalPrice = 0;
    let totalItems = 0;
    let checkedInCount = 0;
    let checkedOutCount = 0;

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
  }, [inventoryItems, filter]);

  return (
    <div className="grid grid-cols-12 mx-40 mt-10">
      <h1 className="col-start-1 col-span-12 font-bold text-3xl text-black my-10">
        Inventory
      </h1>

      <div className="col-span-7 mr-10">
        <Searchbar />
      </div>
      <FilterInventory filter={filter} setFilter={setFilter} categories={categoryItems} />
      <div className="col-span-12 h-20">
        <div className="flex gap-7">
          <Results itemCount={itemCount} />
          <CheckedIn checkedIn={checkedIn} />
          <CheckedOut checkedOut={checkedOut} />
          <TotalAssetValue totalAssetValue={totalAssetValue} />
        </div>
      </div>
      <div className="col-span-12">
        <Table
          inventoryItems={inventoryItems}
          categoryFilter={filter}
        />
        <Pagination />
      </div>
    </div>
  );
}


