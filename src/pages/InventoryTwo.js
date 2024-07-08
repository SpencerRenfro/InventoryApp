//icons
import next from "../assets/icons/next.svg";
//components
import Results from "../components/table/Results";
import CheckedIn from "../components/table/CheckedIn";
import CheckedOut from "../components/table/CheckedOut";
import TotalAssetValue from "../components/table/TotalAssetValue";
import Searchbar from "../components/Searchbar";
import Table from "../components/table/Table";


function InventoryTwo() {
  return (
    <div className="grid grid-cols-12 mx-40 mt-10">
      <h1 className="col-start-1 col-span-12 font-bold text-3xl text-black my-10">
        Inventory
      </h1>

      <div className="col-span-7">
        <Searchbar />
      </div>
      <div className="flex  items-center">
        <h2 className="font-bold text-xl text-black">Filter By</h2>
        <img src={next} alt="chevron" width={25} className="rotate-90" />
      </div>
      <div className="col-span-12 -4 h-20">
        <div className="flex gap-7">
        <Results />
          <CheckedIn />
          <CheckedOut />
          <TotalAssetValue />
        </div>
      </div>
      <div className="col-span-12">
        <Table />
      </div>
    </div>
  );
}

export default InventoryTwo;
