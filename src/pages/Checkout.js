import React, { useState } from "react";
//images
import cube from "../assets/icons/cube.svg";
import checkout from "../assets/icons/checkout.svg";

//components
import ScanInput from "../components/ScanInput";
import DateSelection from "../components/DateSelection";
import ItemFoundCard from "../components/ItemFoundCard";

//hooks
import { useFindItem } from "../hooks/useFindItem";

function Checkout() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleScannerSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setDisplayText(inputText);
    setInputText("");
  };

  const { singleItem, isPending, error } = useFindItem(
    displayText,
    isSubmitted
  );
  return (
    <div className="w-full flex justify-center">
      <div className="dark:bg-slate-700 w-1/3 mt-10 pb-20 mx-20 shadow-xl rounded-xl relative border-2 border-purple-500">
        <div className="flex">
          <h1 className="col-span-12 text-3xl text-center mt-10 w-full dark:text-white">
            Sign Item Out
          </h1>
          <div className="flex w-1/3 justify-end">
            <img
              src={checkout}
              width={150}
              height={150}
              alt="cube"
              className="absolute right-0 "
            />
          </div>
        </div>
        <form className="mx-20">
          <div className="flex flex-col w-full gap-5 items-start">
            <label className="w-2/3">
              <h2 className="font-bold dark:text-white ">Item Name</h2>
              <input
                className="w-full rounded-xl dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:bg-purple-500 dark:text-white"
                type="text"
                required
              />
            </label>
            <div className="w-full">
              <label>
                <h2 className="font-bold dark:text-white">Today's Date</h2>
              </label>
              <DateSelection />
            </div>
            <div>
              <label>
                <h2 className="font-bold dark:text-white">Scan Barcode</h2>
                <ScanInput
                  handleChange={handleChange}
                  handleSubmit={handleScannerSubmit}
                  inputText={inputText}
                  displayText={displayText}
                />
              </label>
              <div>
                {isPending && (
                  <span className="loading loading-bars loading-xs"></span>
                )}
                {error && (
                  <div role="alert" className="my-2 alert alert-error">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 shrink-0 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    {error}
                  </div>
                )}
                {singleItem && (
                  <article>
                    <ItemFoundCard
                      name={singleItem.name}
                      description={singleItem.description}
                      category={singleItem.category}
                      status={singleItem.status}
                    />
                  </article>
                )}
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
