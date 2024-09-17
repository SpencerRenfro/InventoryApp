import { NavLink } from "react-router-dom";

//images
import next from "../../assets/icons/next.svg";

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
                className="grid grid-cols-12 col-span-12 py-4 border-b-2 border-slate-200 cursor-pointer"

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
                  <details className="dropdown">
                    <summary className="btn btn-ghost m-1"> <img src={next} alt="chevron" width={25} className="rotate-90" /></summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                      <li><NavLink to={`/inventory/${item.id}`}>Edit</NavLink></li>
                      <li>Sign In</li>
                      <li>Sign Out</li>
                    </ul>
                  </details>
                </td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </div>
  );
}

