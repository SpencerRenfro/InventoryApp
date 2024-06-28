import React from "react";
import Modal from "../ui/modal/Modal";
import checkmarkPlain from "../assets/icons/checkmarkPlain.svg";

function ItemCreationSuccessful() {
  return (
    <div className="w-full flex justify-center mt-20 ">
      <div
        className="w-1/4 grid grid-cols-12 justify-items-center dark:bg-slate-700 rounded-lg shadow-xl "
        style={{ height: "600px" }}
      >
        <div className="col-span-12 content-center rounded-t-lg w-full bg-green-300">
          <h1 className="font-bold text-center text-slate-700 text-2xl">
            Item Creation Successful
          </h1>
        </div>
        <div className="col-span-12 justify-items-center mt-10">
          <img
            src={checkmarkPlain}
            width="175px"
            className="border-green-500 rounded-full bg-green-300 p-5"
            alt="checkmark"
          />
        </div>
        <div className="col-span-12 justify-items-center">
          <Modal />
        </div>
      </div>
    </div>
  );
}

export default ItemCreationSuccessful;
