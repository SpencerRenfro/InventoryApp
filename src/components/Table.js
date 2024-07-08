import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Icons
import artIcon from "../assets/icons/art_supply.svg";
import transportIcon from "../assets/icons/transport.svg";
import electronicIcon from "../assets/icons/bolt.svg";
import educationIcon from "../assets/icons/education.svg";
import toolIcon from "../assets/icons/power_tool.svg";
import rawIcon from "../assets/icons/raw_material.svg";
import otherIcon from "../assets/icons/other.svg";

// React Icon Button Components
import FilterIcon from "../ui/icons/FilterIcon";
import StatisticsIcon from "../ui/icons/StatisticsIcon";
import BackIcon from "../ui/icons/BackIcon";
import NextIcon from "../ui/icons/NextIcon";
import ClipboardButton from "../ui/icons/ClipboardButton";

// Components
import Searchbar from "./Searchbar";

//hooks
import { useFetch } from "../hooks/useFetch";

export default function Table({
  inventory,
  setShowModal,
  categoryFilter = "",
  modalHandler,
  nextPage,
  prevPage,
  currentPage,
  totalItems,
  totalValue,
  checkedIn,
  checkedOut,
  pageCount
}) {


  // const url = `http://localhost:8000/inventory`;
  const [url, setUrl] = useState(`http://localhost:8000/inventory?_page=${currentPage}&_limit=${5}`);
  // const { data, isPending, error, refetch } = useFetch(url);

  // Function to open the statistics modal
  const openStatisticsModal = () => {
    setShowModal(true);
    modalHandler(false, true); // Call modalHandler from props to open statistics modal
  };

  // Function to open the filter modal
  const openFilterModal = () => {
    setShowModal(true);
    modalHandler(true, false); // Call modalHandler from props to open filter modal
  };


  // Fetch data based on categoryFilter, page, and limit
  const [data, setData] = useState([]);
  const pageSize = 5;

  // const fetchData = async (page, limit) => {
  //   const response = await fetch(
  //     `http://localhost:8000/inventory?_page=${page}&_per_page=${limit}`
  //   );
  //   const data = await response.json();
  //   return data;
  // };
  const fetchData = async (page, limit) => {
    const response = await fetch(
      `http://localhost:8000/inventory?_page=${page}&_per_page=5`
    );
    const data = await response.json();
    return data;
  };

   // Function to fetch data for the current page
  //  const fetchCurrentPageData = async () => {
  //   const data = await fetchData(currentPage, pageSize);
  //   setData(data);
  // };
  const fetchCurrentPageData = async () => {
    const data = await fetchData(currentPage, pageSize);
    setData(data);
    console.log('data ?????????????????????:', data);
  };

  useEffect(() => {
    fetchCurrentPageData();
  }, []);


  useEffect(() => {
    fetchCurrentPageData();
  }, [currentPage]);


  return (
    <div className="px-4 sm:px-6 lg:px-8 dark:bg-slate-900 dark:text-slate-300 mx-20">
      <div className="mt-8 flow-root">
        <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div className="flex justify-end">
              <div className="bg-[#b98c2dff] dark:bg-slate-300 join w-96 justify-end rounded-none rounded-t-lg p-1">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none text-white dark:text-black join-item btn"
                >
                  <BackIcon />
                </button>
                <button className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none rounded-t-none text-white dark:text-black join-item btn">
                  {currentPage}
                </button>
                {/* Add pagination logic here based on currentPage */}
                {/* Example: Show more pages depending on total pages available */}
                {/* Ensure that the page numbers displayed are dynamic */}
                <button className={`bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none hover:none rounded-t-none text-white dark:text-black join-item btn pointer-events-none text-3xl
                ${pageCount < 5 ? "hidden" : ""}`}>
                  ...
                </button>
                <button className={`bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none rounded-t-none text-white dark:text-black join-item btn
                ${pageCount < 5 ? "hidden" : ""}`}>
                  {pageCount - 1}
                </button>
                <button className={`
                bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none text-white dark:text-black join-item btn
                ${pageCount < 10 ? "hidden" : ""}
                `}>
                  {pageCount}
                </button>
                <button
                  onClick={nextPage}
                  className="bg-[#b98c2dff] dark:bg-slate-300 dark:hover:bg-slate-400 border-none text-white dark:text-black join-item btn"
                >
                  <NextIcon />
                </button>
              </div>
            </div>

            {/* Inventory title and search */}
            <div className="bg-amber-400 dark:bg-purple-500 py-4 flex flex-col w-full">
              <div className="flex flex-col w-full">
                <div className="grid grid-cols-12 lg:flex lg:flex-wrap lg:justify-between">
                  <h2 className="pl-5 text-5xl font-bold text-white dark:text-black col-span-12">
                    <span className="text-5xl pr-5">/</span>
                    Inventory
                  </h2>
                  <div className="form-control pr-10 m-2 w-72">
                    <Searchbar />
                  </div>
                </div>
              </div>
            </div>

            {/* Inventory stats */}
            <div className="flex justify-start w-full gap-10">
              <div className="flex align-middle h-max">
                <p className="text-lg align-text-bottom mr-5">Checked In</p>
                <svg
                  className="w-3 fill-green-400 align-center mr-1 m-1"
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                >
                  <circle cx={3} cy={3} r={3} />
                </svg>
                <p className="self-center">{checkedIn}</p>
              </div>
              <div className="flex align-middle h-max">
                <p className="text-lg align-text-bottom mr-5">Checked Out</p>
                <svg
                  className="w-3 fill-red-400 align-center mr-1 m-1"
                  viewBox="0 0 6 6"
                  aria-hidden="true"
                >
                  <circle cx={3} cy={3} r={3} />
                </svg>
                <p className="self-center">{checkedOut}</p>
              </div>
              <div>
              <p className="self-center text-lg align-text-bottom mr-5">Total Items:{<span className="ml-3">{totalItems}</span>}</p>
              </div>
              <div className={`${categoryFilter !== "" ? "" : "grow"}`}>
                <p className="text-lg align-text-bottom mr-5 ">
                  Total Asset Value: ${totalValue}
                </p>
                {/* <p>
                  total items:{totalCount}
                </p> */}
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
              <button onClick={openStatisticsModal} className="flex items-center">
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
                  <th
                    scope="col"
                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:bg-slate-900 dark:text-slate-300 col-start-11"
                  >
                    Actions
                  </th>
                </tr>
              </thead>

          <tbody className="divide-y divide-gray-200 bg-white dark:bg-slate-900 dark:text-slate-300">

</tbody>
<tbody className="divide-y divide-gray-200 bg-white dark:bg-slate-900 dark:text-slate-300">
  {/* {data && data.map((item) =>
    categoryFilter === "" || item.category === categoryFilter ? (
      <tr key={item.id} className="grid grid-cols-12 col-span-12 gap-10">
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
                item.category === "Art_Supplies" ? artIcon :
                item.category === "Electronics" ? electronicIcon :
                item.category === "Education" ? educationIcon :
                item.category === "Tools" ? toolIcon :
                item.category === "Transport" ? transportIcon :
                item.category === "Raw_Materials" ? rawIcon : otherIcon
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
                <div className="flex">
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
                    to={`/inventory/${item.id}`}
                    className="dark:text-slate-300 mx-10"
                  >
                    <h2 className="">View More Details</h2>
                  </Link>
                </div>
                <div>
                  <ClipboardButton barcode={item.barcode} />
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    ) : null
  )} */}
  {/* {data && data.forEach((item) => {
    <div>

    </div>
  } */}
  <tbody className="divide-y divide-gray-200 bg-white dark:bg-slate-900 dark:text-slate-300">
  {data &&
    data.data.map((item) =>
      (categoryFilter === "" || item.category === categoryFilter) ? (
        <tr key={item.id} className="grid grid-cols-12 col-span-12 gap-10">
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
                  item.category === "Art_Supplies" ? artIcon :
                  item.category === "Electronics" ? electronicIcon :
                  item.category === "Education" ? educationIcon :
                  item.category === "Tools" ? toolIcon :
                  item.category === "Transport" ? transportIcon :
                  item.category === "Raw_Materials" ? rawIcon : otherIcon
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
                  <div className="flex">
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
                      to={`/inventory/${item.id}`}
                      className="dark:text-slate-300 mx-10"
                    >
                      <h2 className="">View More Details</h2>
                    </Link>
                  </div>
                  <div>
                    <ClipboardButton barcode={item.barcode} />
                  </div>
                </div>
              </div>
            </div>
          </td>
        </tr>
      ) : null
    )}
</tbody>

</tbody>

            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
