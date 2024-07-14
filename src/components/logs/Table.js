import TableHead from "./TableHead";

function Table({ logs }) {
  return (
    <div>
      <table className="table min-w-full text-black">
        <TableHead />
        <tbody>
          {logs.map((item) => (
            <tr
              key={item.id}
              className="grid  grid-cols-12 col-span-12 items-center py-8"
            >
              <td className="col-span-3">
                <p className="font-medium">{item.name}</p>
              </td>
              <td className="col-span-3">
                <p className="font-medium">{item.id}</p>
              </td>
              <td className="col-span-3">
                <p
                  className={`w-1/2 text-center border rounded-lg
                ${
                  item.action === "CREATED"
                    ? " border-blue-700"
                    : item.action === "IN"
                    ? "border-green-700"
                    : item.action === "OUT"
                    ? "border-red-700"
                    : "border-slate-900"
                }`}
                >
                  {item.action}
                </p>
              </td>
              <td className="col-span-3">
                <p className="font-medium">{item.date}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
