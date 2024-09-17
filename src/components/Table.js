import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

// Icons
import artIcon from "../assets/icons/art_supply.svg";
import transportIcon from "../assets/icons/transport.svg";
import electronicIcon from "../assets/icons/bolt.svg";
import educationIcon from "../assets/icons/education.svg";
import toolIcon from "../assets/icons/power_tool.svg";
import rawIcon from "../assets/icons/raw_material.svg";
import otherIcon from "../assets/icons/other.svg";

//React Icon Button Components
import FilterIcon from "../ui/icons/FilterIcon";
import StatisticsIcon from "../ui/icons/StatisticsIcon";
import BackIcon from "../ui/icons/BackIcon";
import NextIcon from "../ui/icons/NextIcon";
import ClipboardButton from "../ui/icons/ClipboardButton";

export default function Table({
  inventory,
  setShowModal,
  categoryFilter = "",
  modalHandler,
}) {
  const [totalAssetValue, setTotalAssetValue] = useState(0);
  const [checkedIn, setCheckedIn] = useState(0);
  const [checkedOut, setCheckedOut] = useState(0);

  // Function to open the statistics modal
  const openStatisticsModal = () => {
    setShowModal(true);
    // Call modalHandler from props to open statistics modal
    modalHandler(false, true);
  };
  const openFilterModal = () => {
    setShowModal(true);
    // Call modalHandler from props to open filter modal
    modalHandler(true, false);
  };

  useEffect(() => {
    let total = 0;
    let checkedInCount = 0;
    let checkedOutCount = 0;
    let categories = [""];

    if (categoryFilter === "") {
      inventory.forEach((item) => {
        if (!isNaN(parseFloat(item.price))) {
          total += parseFloat(item.price);
        }
        if (item.status === "IN") {
          checkedInCount++;
        } else if (item.status === "OUT") {
          checkedOutCount++;
        }
        if (item.category && !categories.includes(item.category)) {
          categories.push(item.category);
          console.log("categories:", categories);
        }
      });
    } else {
      let filteredItems = inventory.filter(
        (item) => item.category === categoryFilter
      );
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
      <div className="mt-8 flow-root">
        <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="flex justify-end">
              <div className=" bg-[#b98c2dff] dark:bg-slate-300   join w-96  justify-end rounded-none rounded-t-lg p-1">
                <button className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none text-white dark:text-black join-item btn">
                  {/* <img src={back} width={25}  alt="back"/> */}
                  {/* <svg fill={'black'} src={back} width={25} /> */}
                  <BackIcon />
                </button>
                <button className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none  rounded-t-none text-white dark:text-black  join-item btn">
                  1
                </button>
                <button className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none hover:none rounded-t-none text-white dark:text-black join-item  btn pointer-events-none   text-3xl">
                  ...
                </button>
                <button className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none rounded-t-none text-white dark:text-black   join-item btn">
                  99
                </button>
                <button className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none text-white dark:text-black join-item btn">
                  100
                </button>
                <button className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none text-white dark:text-black join-item btn">
                  <NextIcon />
                </button>
              </div>
            </div>

            {/* Inventory title and search */}
            <div className="bg-amber-400  dark:bg-purple-500  py-4 flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="grid grid-cols-12 lg:flex lg:flex-wrap lg:justify-between">
                  <h2 className="pl-5 text-5xl font-bold text-white dark:text-black col-span-12">
                    <span className="text-5xl pr-5">/</span>
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

            {/* Inventory stats */}
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
              <div className={`${categoryFilter !== "" ? "" : "grow"}`}>
                <p className="text-lg align-text-bottom mr-5 ">
                  Total Asset Value: ${totalAssetValue}
                </p>
              </div>
              {categoryFilter !== "" && (
                <div className="flex grow ">
                  <div className="flex">
                    <p className="text-lg  mr-5 ">Filtering By:</p>
                    <p className="text-lg">{categoryFilter}</p>
                  </div>
                </div>
              )}

              {/* Button to open statistics modal */}
              <button
                onClick={openStatisticsModal}
                className="flex items-center"
              >
                <StatisticsIcon />
              </button>

              {/* Filter icon */}
              <div className="">
                <button onClick={openFilterModal}>
                  <FilterIcon />
                </button>
              </div>
            </div>

            {/* Inventory table */}
            <table className="min-w-full divide-y divide-gray-300">
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
                        <div className="flex text-gray-900 dark:text-slate-300">
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
                                : otherIcon
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
                              <div className="flex " >
                                <a
                                  href={`https://barcode.tec-it.com/barcode.ashx?data=${item.barcode}&code=Code128&dpi=96`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="w-full"
                                >
                                  <img
                                    src={`https://barcode.tec-it.com/barcode.ashx?data=${item.barcode}&code=Code128&dpi=96`}
                                    alt="Barcode"
                                    className="w-full max-h-20"
                                  />
                                </a>
                              </div>
                            )}
                            <div className="flex mt-3 gap-3">
                              <div className="grid content-center btn hover:bg-blue-700">
                                <Link
                                  target="_blank"
                                  to={`/inventory/${item.id}`}
                                  className=" dark:text-slate-300 mx-10"
                                >
                                  <h2 className="">View More Details</h2>
                                </Link>
                              </div>
                              <div>
                              <ClipboardButton barcode={item.barcode} />
                              </div>
                            </div>
                          </div>
                          {/* <div className="flex pt-2 gap-5">
                            <div className="grid content-center btn">
                              <Link
                                target="_blank"
                                to={`/inventory/${item.id}`}
                                className="text-indigo-600 hover:text-indigo-900 dark:text-slate-300 mx-10"
                              >
                                <h2 className="">View More Details</h2>
                              </Link>
                            </div>
                            <Link
                              target="_blank"
                              to={`/inventory/${item.barcode}`}
                              className="text-indigo-600 hover:text-indigo-900 dark:text-slate-300 mx-10"
                            >
                              View Barcode
                            </Link>
                            <ClipboardButton barcode={item.barcode} />
                          </div> */}
                        </div>
                      </td>
                    </tr>
                  ) : null
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
