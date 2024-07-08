import { NavLink } from "react-router-dom";

import scan from "../assets/icons/scan.svg";

export default function Example() {
  return (
    // <div className="flex px-2 lg:px-0">
    //   <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
    //     {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
    //     <NavLink
    //       to="/"
    //       className={({ isActive }) =>
    //         isActive
    //           ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //           : "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //       }
    //     >
    //       Dashboard
    //     </NavLink>
    //     <NavLink
    //       to="add-item"
    //       className={({ isActive }) =>
    //         isActive
    //           ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //           : "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //       }
    //     >
    //       Add-item
    //     </NavLink>
    //     <NavLink
    //       to="/check-in"
    //       className={({ isActive }) =>
    //         isActive
    //           ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //           : "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //       }
    //     >
    //       Sign Item In
    //     </NavLink>
    //     <NavLink
    //       to="/checkout"
    //       className={({ isActive }) =>
    //         isActive
    //           ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //           : "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //       }
    //     >
    //       Sign Item Out
    //     </NavLink>
    //     <NavLink
    //       to="/logs"
    //       className={({ isActive }) =>
    //         isActive
    //           ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //           : "inline-flex items-center border-b-2  px-1 pt-1 text-sm font-medium text-gray-900 dark:text-slate-300"
    //       }
    //     >
    //       Logs
    //     </NavLink>
    //   </div>
    // </div>
    <div
      className="w-full   h-32 flex items-center bg-slate-100 text-black shadow-2xl"
      style={{ fontFamily: "Roboto, sans-serif" }}
    >
      <div className="flex items-center gap-1 ml-5 grow">
        <img src={scan} width={40} height={20} alt="barcode" />
        <h1 className="text-center text-4xl font-bold">Scanner</h1>
      </div>
      <div className="text-2xl semibold mx-10">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1  font-medium text-2xl semibold mx-10"
              : "inline-flex items-center border-b-2  px-1 pt-1  font-medium text-2xl semibold mx-10"
          }
        >
          Inventory
        </NavLink>
      </div>
      <div>
      <NavLink
          to="/inventoryTwo"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1  font-medium text-2xl semibold mx-10"
              : "inline-flex items-center border-b-2  px-1 pt-1  font-medium text-2xl semibold mx-10"
          }
        >
          Item Management
        </NavLink>
      </div>
      <div>
      <NavLink
          to="/logs"
          className={({ isActive }) =>
            isActive
              ? "inline-flex items-center border-b-2 border-purple-500 px-1 pt-1  text-2xl semibold mx-10"
              : "inline-flex items-center border-b-2  px-1 pt-1  text-2xl semibold mx-10"
          }
        >
          Logs
        </NavLink>
      </div>
    </div>
  );
}
