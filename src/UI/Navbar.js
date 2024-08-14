import { NavLink } from "react-router-dom";

import scan from "../assets/icons/scan.svg";

export default function Example() {
  return (
    <div
      className="w-full h-32 flex items-center bg-slate-100 text-black shadow-xl"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="flex items-center gap-1 ml-5 grow">
        <img src={scan} width={40} height={20} alt="barcode" />
        <NavLink className="text-center text-4xl font-bold" to="check-in">Scanner</NavLink>
      </div>
      <div className="text-2xl semibold mx-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 font-medium text-2xl semibold mx-10"
              : "inline-flex items-center border-b-2  px-1 pt-1  font-medium text-2xl semibold mx-10"
          }
        >
          Inventory
        </NavLink>
      </div>
      <div>
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role="button"
            className="inline-flex items-center px-1 pt-1 font-medium text-2xl semibold mx-10"
          >
            Item Management
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box z-[1] w-52 p-2 shadow"
          >
            <li>
              <NavLink to="/item-management">Item Management</NavLink>
            </li>
            <li>
              <NavLink to="/add-item">Add-item</NavLink>
            </li>
            <li>
              <NavLink to="/checkout">Check-out</NavLink>
            </li>
            <li>
              <NavLink to="/check-in">Scan</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <NavLink
          to="/logs"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-2xl semibold mx-10"
              : "inline-flex items-center border-b-2 px-1 pt-1  text-2xl semibold mx-10"
          }
        >
          Logs
        </NavLink>
      </div>
    </div>
  );
}
