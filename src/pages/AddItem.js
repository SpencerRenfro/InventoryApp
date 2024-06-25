import React, { useState, useEffect } from "react";
import BarcodeGenerator from "../components/BarcodeGenerator";
import { useFetch } from "../hooks/useFetch";
import { useBarcodeGenerator } from "../hooks/useBarcodeGenerator";
import { useNavigate } from "react-router-dom";

//images
import cube from "../assets/icons/cube.svg";
import deleteIcon from "../assets/icons/delete.svg";

export default function AddItem() {
  const [tempItem, setTempItem] = useState(""); // Changed
  const [barcodeState, setBarcodeState] = useState();
  const navigate = useNavigate();

  const { postData, data, error } = useFetch(
    "http://localhost:8000/inventory",
    "POST"
  );

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
    if(tempItem.trim() === ""){
      return;
    }
    setFormData({
      ...formData,
      itemCollection: [...formData.itemCollection, tempItem],
    });
    setTempItem(""); // Changed: Clear input field after adding item
  };

  const deleteCollectionItem = (key) => {
    setFormData({
      ...formData,
      itemCollection: formData.itemCollection.filter(
        (item, index) => index !== key
      ),
    });
  };

  useEffect(() => {
    setFormData({
      ...formData,
      barcode: barcodeState,
      barcodeCombinedName: barcodeState + "_" + formData.name,
    });
  }, [formData.name, barcodeState]);

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data]);

  return (
    <div className="w-full flex justify-center">
      <div className="dark:bg-slate-700 w-1/3 my-10 mx-20 shadow-xl rounded-xl relative border-2 border-purple-500">
        {/* Changed to relative */}
        <div className="flex">
          <h1 className="col-span-12 text-3xl text-center mt-10 w-full dark:text-white">
            Add Item
          </h1>
          <div className="flex w-1/3 justify-end">
            <img
              src={cube}
              width={150}
              height={150}
              alt="cube"
              className="absolute right-0 "
            />
            {/* Adjusted positioning */}
          </div>
        </div>
        <form className="mx-20" onSubmit={handleSubmit}>
          <div className="flex flex-col w-full gap-5 items-start">
            <label className="w-2/3">
              <h2 className="font-bold dark:text-white ">Item Name</h2>
              <input
                className="w-full rounded-xl dark:focus:ring-purple-500 dark:focus:border-purple-500 dark:bg-purple-500 dark:text-white"
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    name: e.target.value,
                    barcodeCombinedName: barcode + "_" + e.target.value,
                  })
                }
                required
              />
            </label>
            <div className="w-2/3">
              <label htmlFor="location" className="font-bold dark:text-white">
                Category
              </label>
              <select
                id="location"
                name="location"
                className="text-white active:bg-purple-500 dark:hover:bg-purple-500 dark:focus:ring-purple-500 dark:focus:border-purple-500 bg-purple-500 w-full rounded-xl focus:ring-slate-900 focus:border-slate-900 dark:focus:ring-purple-500 dark:focus:border-purple-500"
                defaultValue="other"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                required
              >
                <option value="Art_Supplies" className="dark:hover:bg-purple-500 dark:focus:ring-purple-500 dark:focus:border-purple-500">Art Supplies</option>
                <option value="Education" className="hover:bg-red-500">Education</option>
                <option value="Electronics">Electronics</option>
                <option value="Tools">Tools</option>
                <option value="Transport">Transport</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <label className="w-2/3">
              <h2 className="font-bold  dark:text-white ">Item Price</h2>
              <input
                className="w-full rounded-xl dark:text-white dark:bg-purple-500 dark:focus:ring-purple-200 dark:focus:border-2 dark:focus"
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    price: parseFloat(e.target.value),
                  })
                }
                required
              />
            </label>
            <label className="w-2/3">
              <h2 className="font-bold dark:text-white">Item Description</h2>
              <input
                className="w-full rounded-xl dark:bg-purple-500 dark:text-slate-100"
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    description: e.target.value,
                  })
                }
                value={formData.description}
              />
            </label>
            <label className="w-2/3">
              <h2 className="font-bold dark:text-white ">
                Add Collection of subitems
              </h2>
              <div>
                <input
                  className="w-full rounded-xl dark:bg-purple-500 dark:text-white"
                  type="text"
                  value={tempItem}
                  onChange={(e) => setTempItem(e.target.value)}
                />
                <div className="w-full flex justify-end  pt-2">
                <button className="btn bg-slate-900 text-white dark:text-white " type="button" onClick={addTempItem}>
                  Add
                </button>
                </div>
                {formData.itemCollection.length > 0 && (
                  <ul className="py-4">
                    {formData.itemCollection.map((item, index) => (
                      <div
                        className="flex flex-row justify-between"
                        key={`${item}_${999999999999 * Math.random()}`}
                      >
                        <li>{item}</li>
                        <div
                          className="cursor-pointer"
                          onClick={() => deleteCollectionItem(index)}
                        >
                          <img src={deleteIcon} alt="delete button" />
                        </div>
                      </div>
                    ))}
                  </ul>
                )}
              </div>
            </label>
            <div>

              <canvas
               style={{ display: formData.name ? 'block' : 'none' }}
              id={formData.name}></canvas>
            </div>
            <button type="submit" className="btn bg-purple-500 dark:hover:bg-purple-400 text-white  my-5">
                Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
