import BarcodeGenerator from "./BarcodeGenerator";
import { useBarcode } from "../hooks/useBarcode";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
//icons
import artIcon from "../assets/icons/art_supply.svg";
import transportIcon from "../assets/icons/transport.svg";
import electronicIcon from "../assets/icons/bolt.svg";
import educationIcon from "../assets/icons/education.svg";
import toolIcon from "../assets/icons/power_tool.svg";
import rawIcon from "../assets/icons/raw_material.svg";
import other from "../assets/icons/other.svg";
import filter from "../assets/icons/filter.svg";

export default function Example({
  inventory,
  setShowModal,
  categoryFilter = "",
}) {
  const [totalAssetValue, setTotalAssetValue] = useState(0);
  const [checkedIn, setCheckedIn] = useState(0);
  const [checkedOut, setCheckedOut] = useState(0);

  useEffect(() => {
    let total = 0;
    let checkedInCount = 0;
    let checkedOutCount = 0;
    if(categoryFilter === ""){
      inventory.forEach((item) => {
        if (!isNaN(parseFloat(item.price))) {
          total += parseFloat(item.price);
        }
        if (item.status === "IN") {
          checkedInCount++;
        } else if (item.status === "OUT") {
          checkedOutCount++;
        }
      });
    } else{
        let filteredItems = inventory.filter((item) => item.category === categoryFilter);
        filteredItems.forEach((item) => {
          if (!isNaN(parseFloat(item.price))) {
            total += parseFloat(item.price);
          }
          if (item.status === "IN") {
            checkedInCount++;
          } else if (item.status === "OUT") {
            checkedOutCount++;
          }
        });
    }

    setTotalAssetValue(total);
    setCheckedOut(checkedOutCount);
    setCheckedIn(checkedInCount);
  }, [inventory, checkedIn, checkedOut, categoryFilter]);

  return (
    <div className="px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-slate-300 mx-20">
      <div className="mt-8 flow-root ">
        <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 ">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="bg-slate-900  dark:bg-purple-500  py-4 flex flex-col w-full">
              <div className="flex flex-col w-full ">
                <div className="grid grid-cols-12 lg:flex lg:flex-wrap lg:justify-between">
                  <h2 className="pl-5 text-2xl text-white dark:text-black col-span-12">
                    Inventory
                  </h2>
                  <div className="form-control pr-10 m-2 w-72">
                    <input
                      type="text"
                      placeholder="Search"
                      className="input input-bordered w-24 md:w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-start   w-full  gap-10">
              <div className="flex align-middle h-max">
                <p className="text-lg align-text-bottom mr-5">Checked In</p>

                <svg
                  className="w-3  fill-green-400 align-center mr-1 m-1"
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                >
                  <circle cx={3} cy={3} r={3} />
                </svg>
                <p className=" self-center">{checkedIn}</p>
              </div>
              <div className="flex align-middle h-max">
                <p className="text-lg align-text-bottom mr-5">Checked Out</p>

                <svg
                  className="w-3  fill-red-400 align-center mr-1 m-1"
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                >
                  <circle cx={3} cy={3} r={3} />
                </svg>
                <p className=" self-center">{checkedOut}</p>
              </div>
              <div className="grow">
                <p className="text-lg align-text-bottom mr-5 ">
                  Total Asset Value: ${totalAssetValue}
                </p>
              </div>
              <div className="">
                <button onClick={setShowModal}>
                  <img src={filter} alt="filter" width="70px" />
                </button>
              </div>
            </div>
            <table className="min-w-full divide-y divide-gray-300 ">
              <thead>
                <tr className="grid grid-cols-12 col-span-12 gap-20">
                  <th
                    scope="col"
                    className="py-3.5 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0 dark:bg-slate-900 dark:text-slate-300 col-span-2"
                  >
                    Item Name
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:bg-slate-900 dark:text-slate-300 col-span-2"
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:bg-slate-900 dark:text-slate-300 col-span-2"
                  >
                    Category
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:bg-slate-900 dark:text-slate-300 col-start-7"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:bg-slate-900 dark:text-slate-300 col-start-9"
                  >
                    Value
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white dark:bg-slate-900 dark:text-slate-300">
                {inventory.map((item) =>
                  categoryFilter === "" || item.category === categoryFilter ? (
                    <tr
                      key={item.id}
                      className="grid grid-cols-12 col-span-12 gap-10"
                    >
                      <td className="whitespace-nowrap py-5 pl-4 pr-3 text-sm sm:pl-0 col-span-2">
                        <div className="flex flex-grow-1 items-center">
                          <div className="ml-4">
                            <div className="font-medium text-gray-900 dark:text-slate-300">
                              {item.name}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 col-span-2">
                        <div className="text-gray-900 dark:text-slate-300">
                          {item.description}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 col-span-2">
                        <div className=" flex text-gray-900 dark:text-slate-300">
                          <img
                            className="mr-5"
                            style={{ height: "20px" }}
                            src={
                              item.category === "Art_Supplies"
                                ? artIcon
                                : item.category === "Electronics"
                                ? electronicIcon
                                : item.category === "Education"
                                ? educationIcon
                                : item.category === "Tools"
                                ? toolIcon
                                : item.category === "Transport"
                                ? transportIcon
                                : item.category === "Raw_Materials"
                                ? rawIcon
                                : other
                            }
                            alt={`category_type:${item.category}`}
                          />
                          <p>{item.category}</p>
                        </div>
                      </td>
                      <td className="whitespace-nowrap ml-5 px-3 py-5 text-sm text-gray-500 dark:text-slate-300 col-span-2 col-start-7">
                        {item.status === "IN" ? (
                          <span className="inline-flex items-center rounded-md bg-green-200 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                            IN
                          </span>
                        ) : (
                          <span className="inline-flex items-center rounded-md bg-red-200 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20">
                            OUT
                          </span>
                        )}
                      </td>
                      <td className="whitespace-nowrap px-3 py-5 text-sm text-gray-500 ml-8 col-start-9">
                        <div className="text-gray-900 dark:text-slate-300">
                          {item.price}
                        </div>
                      </td>
                      <td className="whitespace-nowrap text-sm font-medium sm:pr-0 col-span-12 xl:col-span-3">
                        <div className="flex flex-col items-center py-2">
                          <div>
                            {item.barcode && (
                              <a
                                href={`https://barcode.tec-it.com/barcode.ashx?data=${item.barcode}&code=Code128&dpi=96`}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <img
                                  src={`https://barcode.tec-it.com/barcode.ashx?data=${item.barcode}&code=Code128&dpi=96`}
                                  alt="Barcode"
                                />
                              </a>
                            )}
                          </div>
                          <div>
                            <Link
                              target="_blank"
                              to={`/inventory/${item.id}`}
                              className="text-indigo-600 hover:text-indigo-900 dark:text-slate-300 mx-10"
                            >
                              View More Details<span className="sr-only"></span>
                            </Link>
                            <Link
                              target="_blank"
                              to={`/inventory/${item.barcode}`}
                              className="text-indigo-600 hover:text-indigo-900 dark:text-slate-300 mx-10"
                            >
                              View Barcode
                            </Link>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
          {/* <div className="flex  justify-end">
            <div>
              <button
                type="button"
                className="block rounded-md bg-indigo-600 px-3 py-2 mr-10 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Item
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
