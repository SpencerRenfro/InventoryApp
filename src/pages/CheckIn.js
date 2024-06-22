import React, {useState, useEffect} from "react";
import ScanInput from '../components/ScanInput'

import { useFindItem } from "../hooks/useFindItem";
export default function CheckIn() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const itemFound = false;

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log('inputText', inputText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(inputText);
    setInputText("");
    console.log('form submitted');

  };

  const { singleItem, isPending, error } = useFindItem(displayText);



  return (
    <div className="flex flex-col items-center align-items-center border pt-20">
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
      {/* {!itemFound && (
        <div>
          <h2>Item Found</h2>
          <p>Name: Stero</p>
          <div>
          <button>Confirm</button>
          <button>Cancel</button>
          </div>
        </div>
      )} */}

      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {singleItem && (
        <article>
          <h2>{singleItem.name}</h2>
          <p>{singleItem.description}</p>
          <p>{singleItem.category}</p>
          <p>{singleItem.status}</p>
        </article>
      )}

      </div>

    </div>
  );
}
