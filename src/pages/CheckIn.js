import React, { useState, useEffect } from "react";

//components
import ScanInput from "../components/ScanInput";
import ItemFoundCard from "../components/ItemFoundCard";

//modal code TESTING
import Modal from "../ui/modal/Modal";

//hooks
import { useFindItem } from "../hooks/useFindItem";

export default function CheckIn() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const itemFound = false;

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log("inputText", inputText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(inputText);
    setInputText("");
    console.log("form submitted");
  };

  const { singleItem, isPending, error } = useFindItem(displayText);

  return (
    <div className="flex flex-col items-center align-items-center  pt-20">
      <form>
        <label>Enter Barcode:</label>
        <ScanInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputText={inputText}
          displayText={displayText}
        />

        {/* <button type="submit">Check In</button> */}
      </form>
      <div className="pt-20">
        {displayText && <p>You entered: {displayText}</p>}

        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
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
  );
}
