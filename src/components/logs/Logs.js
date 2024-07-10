//hooks
import { useFetch } from "../../hooks/useFetch";

//components
import Searchbar from "../Searchbar";
import FilterLogs from "./FilterLogs";
import Results from "../inventory-table/Results";
import Table from "./Table";
import Pagination from "../../ui/pagination/Pagination";

export default function LogsTwo() {
  const { data:logs, isPending, error } = useFetch('http://localhost:8000/itemLogs');
  return (
    <div>
    <div className="grid grid-cols-12 mx-40 mt-10">
      <h1 className="col-start-1 col-span-12 font-bold text-3xl text-black my-10">
        Logs
      </h1>
      <div className="col-span-7 mr-10">
        <Searchbar />
      </div>
      <FilterLogs />
      <div className="col-span-12 -4 h-20">
        <div className="flex gap-7">
          <Results />
        </div>
      </div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}


      {logs && (
        <div className="col-span-12">
      <Table logs={logs} />
      <Pagination />
      </div>
      )}
    </div>
    </div>
  );
}
