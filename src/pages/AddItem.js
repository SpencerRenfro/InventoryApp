import React, { useState, useEffect } from "react";
import BarcodeGenerator from "../components/BarcodeGenerator";

//hooks
import { useFetch } from "../hooks/useFetch";
import { useBarcodeGenerator } from "../hooks/useBarcodeGenerator";
import { useNavigate } from "react-router-dom";

export default function AddItem() {
  const [tempItem, setTempItem] = useState("");
  const [barcodeState, setBarcodeState] = useState();
  const navigate = useNavigate()

  //post request
  const { postData, data, error } = useFetch(
    "http://localhost:8000/inventory",
    "POST"
  );

  //form data
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: 0.0,
    description: "",
    barcode: "",
    barcodeCombinedName: "",
    itemCollection: [],
    barcodeUrl: "",
    qrCode: "",
    status: "IN",
  });

  const { canvasRef, barcode, barcodeObject } = useBarcodeGenerator(
    formData.name,
    setBarcodeState
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postData(formData);
  };

  const addTempItem = () => {
    setFormData({
      ...formData,
      itemCollection: [...formData.itemCollection, tempItem],
    });
  };

  useEffect(() => {
    console.log("formData", formData);
    console.log("barcodeState", barcodeState);
    setFormData({
      ...formData,
      barcode: barcodeState,
      barcodeCombinedName: barcodeState + "_" + formData.name,
    });

  }, [formData.name]);

  //redirect the user when we get a data response
  useEffect(() => {

    if(data){
      navigate("/");
    }
  }, [data]);

  return (
    <div>
      <form
        className="mx-40 border flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <label>
          <p>Item Name</p>
          <input
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                name: e.target.value,
                barcodeCombinedName: barcode + "_" + e.target.value,
              });
            }}
            required
          />
        </label>
        <label>
          <span>
            <p>Item Category</p>
            <input
              type="text"
              onChange={(e) => {
                setFormData({
                  ...formData,
                  category: e.target.value,
                });
              }}
            />
          </span>
        </label>
        <label>
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium leading-6 text-gray-900 "
            >
              Category
            </label>
            <select
              id="location"
              name="location"
              className="w-72"
              defaultValue="Canada"
              onChange={(e) => {

                setFormData({
                  ...formData,
                  category: e.target.value,

                });
              }}
            >
              <option value="Art_Supplies">Art Supplies</option>
              <option value="Education">Education</option>
              <option value="Electronics">Electronics</option>
              <option value="Tools">Tools</option>
              <option value="Transport">Transport</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </label>
        <label>
          <p>Item Price</p>
          <input
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                price: parseFloat(e.target.value),
              });
            }}
          />
        </label>
        <label>
          <p>Item Description</p>
          <input
            type="text"
            onChange={(e) => {
              setFormData({
                ...formData,
                description: e.target.value,
              });
            }}
          />
        </label>
        {/* <label>
            <p>Serial Number</p>
            <input
              type="text"
              onChange={(e) => {
                console.log('Description:', + e.target.value)
              }}
            />
        </label> */}
        <label className="flex flex-col items-center ">
          <span>Add Collection of subitems</span>
          <div>
            <input
              type="text"
              onChange={(e) => {
                console.log("Description:", e.target.value);
                setTempItem(e.target.value);
              }}
            />
            <button className="btn" onClick={addTempItem}>
              Add
            </button>
          </div>
        </label>

        <button
          type="submit"
          className="btn btn-primary"
          // onSubmit={handleSubmit}
        >
          Submit
        </button>
        <canvas id={formData.name}></canvas>
      </form>
    </div>
  );
}
