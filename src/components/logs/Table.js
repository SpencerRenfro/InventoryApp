import TableHead from "./TableHead";

function Table({ logs, filter }) {
  return (
    <div>
      <table className="table min-w-full text-black ">
        <TableHead />
        <tbody className="result">
          {logs.map((item) =>
            filter === "" || item.action === filter ? (
              <tr
                key={`${item.id}-${item.date}-${item.action}`}
                className="grid grid-cols-12 col-span-12 items-center py-8 border-b-2 border-slate-200"
              >
                <td className="col-span-3">
                  <p className="font-medium">{item.name}</p>
                </td>
                <td className="col-span-3">
                  <p className="font-medium">{item.id}</p>
                </td>
                <td className="col-span-3">
                  <div
                    className={`badge badge-outline badge-lg w-24
                ${
                  item.action === "CREATED"
                    ? " badge-info"
                    : item.action === "IN"
                    ? "badge-success"
                    : item.action === "OUT"
                    ? "badge-error"
                    : ""
                }`}
                  >
                    {item.action}
                  </div>
                </td>
                <td className="col-span-3">
                  <p className="font-medium">{item.date}</p>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
