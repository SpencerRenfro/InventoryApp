import React, { useState, useEffect } from "react";
import ScanInput from "../components/ScanInput";
import ItemFoundCard from "../components/ItemFoundCard";
import { useFindItem } from "../hooks/useFindItem";
import { useFetch } from "../hooks/useFetch";

export default function CheckIn() {
  const [inputText, setInputText] = useState("");
  const [displayText, setDisplayText] = useState("");
  const [url, setUrl] = useState("");
  const [formData, setFormData] = useState({
    id: "",
    date: "06/28/2024, 11:35:39 AM",
    name: "",
    category: "",
    price: 0,
    serialNumber: "",
    description: "",
    barcode: "",
    barcodeCombinedName: "",
    itemCollection: [],
    barcodeUrl: "",
    qrCode: "",
    status: ""
  });

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDisplayText(inputText); // Set displayText to trigger useEffect for fetching item
    setInputText(""); // Clear input field after submission
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      status: "IN"
    });
    putData(formData); // Trigger PUT request to check in the item
  };

  const { singleItem, isPending, error } = useFindItem(displayText);

  const {
    putData,
    data: itemCheckedIn,
    error: putItemError
  } = useFetch(url, "PUT");

  useEffect(() => {
    if (singleItem) {
      // Update formData with fetched item data
      setFormData({
        id: singleItem.id,
        date: "06/28/2024, 11:35:39 AM",
        name: singleItem.name,
        category: singleItem.category,
        price: singleItem.price,
        serialNumber: singleItem.serialNumber,
        description: singleItem.description,
        barcode: singleItem.barcode,
        barcodeCombinedName: singleItem.barcodeCombinedName,
        itemCollection: singleItem.itemCollection,
        barcodeUrl: singleItem.barcodeUrl,
        qrCode: singleItem.qrCode,
        status: singleItem.status
      });
      // Set URL for PUT request with barcode query parameter
      setUrl(`http://localhost:8000/inventory?barcode=${singleItem.barcode}`);
    }
  }, [singleItem, displayText]);

  useEffect(() => {
    if (itemCheckedIn) {
      console.log("Item checked in:", itemCheckedIn);
    }
    if (putItemError) {
      console.error("Error checking in item:", putItemError);
    }
  }, [itemCheckedIn, putItemError]);

  return (
    <div className="flex flex-col items-center align-items-center pt-20">
      <form onSubmit={handleSubmit}>
        <label>Enter Barcode:</label>
        <ScanInput
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          inputText={inputText}
          displayText={displayText}
        />
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
              handleSignIn={handleSignIn}
            />
          </article>
        )}
      </div>
    </div>
  );
}
