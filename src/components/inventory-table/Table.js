import { NavLink } from "react-router-dom";

//components
import TableHead from "./TableHead";



export default function Table({ inventoryItems, categoryFilter }) {
  return (
    <div>
      <table className="table min-w-full text-black">
        <TableHead />
        <tbody>
          {inventoryItems.map((item) =>
            categoryFilter === "" || item.category === categoryFilter || item.status === categoryFilter ? (
              <tr
                className="grid grid-cols-12 col-span-12  py-4 border-b-2 border-slate-200 cursor-pointer"

                key={item.id}
              >
                <td className="col-span-2">
                  <p className="font-medium">{item.name}</p>
                </td>
                <td className="col-span-2">
                  <p className="font-medium">{item.description}</p>
                </td>
                <td className="col-span-2">
                  <p className="font-medium">{item.category}</p>
                </td>
                <td className="col-span-2">
                {item.status === "IN" ? (

                  <div className="badge badge-success badge-outline badge-lg w-14">IN</div>

                ) : (
                  <div className="badge badge-error badge-outline badge-lg w-14">OUT</div>
                )}
                </td>
                <td className="col-span-2">
                  <p className="font-medium">{item.price}</p>
                </td>
                <td className="col-span-2">
                  <p className="font-medium">{item.barcode}</p>
                </td>
                <td>
                <NavLink to={`/inventory/${item.id}`}>Edit</NavLink>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

