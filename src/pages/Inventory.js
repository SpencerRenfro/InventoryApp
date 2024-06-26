import React from "react";
import Table from "../components/Table";
import { useFetch } from "../hooks/useFetch";

//components
import InventorySkeleton from "../components/skeleton/InventorySkeleton";

function Inventory(props) {
  const { data, isPending, error } = useFetch("http://localhost:8000/inventory");
  //running json server on port 8000 json-server --host localhost --port 8000 './Data/db.json'
  return (
    <div className="dark:bg-slate-900 dark:text-slate-300">

      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && <div><Table inventory={data} setShowModal={props.setShowModal}  categoryFilter={props.categoryFilter}/> </div>}
      {!data && !isPending && <InventorySkeleton />}
      {/* <InventorySkeleton /> */}
    </div>
  );
}

export default Inventory;
