import React from "react";
import LogTable from "../components/LogTable";
import { useFetch } from "../hooks/useFetch";

function Logs() {
  const { data, loading, error } = useFetch("http://localhost:8000/itemLogs");

  return (
    <div className="pb-10">
      <div className="border-4  dark:border-purple-500  mx-20 my-10">
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data && (
          <div className="overflow-x-auto pb-5">
            <table className="table">
              <thead>
                <tr className="text-2xl dark:text-white">
                  <th>Item</th>
                  <th>ID</th>
                  <th>Action</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {data.map((log, index) => (
                  <tr key={index}>
                    <td>{log.name}</td>
                    <td>{log.id}</td>
                    <td>{log.action}</td>
                    <td>{log.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default Logs;
