import React from "react";
import { Link } from "react-router-dom";
import Inventory from "./Inventory";

import close from "../assets/icons/close.svg";

export default function ItemCreationFailure(props) {
  return (
    <div className="w-full flex justify-center mt-20 ">
      {/* <CreationSuccessful /> */}
      <div
        className="w-1/4 grid grid-cols-12  justify-items-center  dark:bg-slate-700 border  rounded-lg shadow-xl "
        style={{ height: "600px" }}
      >
        <div className="col-span-12 content-center border w-full bg-red-400">
          <h1 className="font-bold text-center text-white text-2xl">
            Item Creation Failed
          </h1>
        </div>
        <div className="col-span-12 justify-items-center mt-10">
          <svg
            height="125px"
            width="125px"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block stroke-current border rounded-full p-2 border-red-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <div className="col-span-12 justify-items-center">
          <div className="grid justify-items-center">
            <Link to="/" element={<Inventory />}>
              <button className="btn w-48">Close</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
