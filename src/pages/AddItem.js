import React, { useState, useEffect } from "react";
import BarcodeGenerator from "../components/BarcodeGenerator";
import { useFetch } from "../hooks/useFetch";
import { useBarcodeGenerator } from "../hooks/useBarcodeGenerator";
import { useNavigate } from "react-router-dom";


/*
What this component does:
Takes form data from the user and sends it to the server to create a new item.
Creates a timestamp for the item creation and sends it to the server to /logs.
Categories are fetched from the server and displayed in a dropdown.
The user can also add a custom category.
The user can add / delete a collection of subitems.
upon submission, the user is navigated to a success or failure page.

what can be improved:
add useRef for showing errors or success messages for the card component
Checking for duplicates categories
The user can add a custom category, but the user cannot delete it.
The UI for adding or not adding a custom category
Loading states for the fetch requests
aborting the fetch requests when the component is unmounted (have not tested this)
*/



//images
import cube from "../assets/icons/cube.svg";
import deleteIcon from "../assets/icons/delete.svg";

export default function AddItem() {
  const [customCategory, setCustomCategory] = useState(false);
  const [tempItem, setTempItem] = useState(""); // Changed
  const [barcodeState, setBarcodeState] = useState();
  const navigate = useNavigate();




  const {
    postData: postInventoryData,
    data: inventoryData,
    error: inventoryError,
  } = useFetch("http://localhost:8000/inventory", "POST");

  const {
    postData: postLogsData,
    data: logsData,
    error: logsError,
  } = useFetch("http://localhost:8000/itemLogs", "POST");

  const {
    postData: postCategoryData,
    data: categorySubmission,
    error: categoryError
  } = useFetch("http://localhost:8000/categories","POST");

  const { data:categories,
     error:categoriesError
    } = useFetch("http://localhost:8000/categories", "GET");



  const [formData, setFormData] = useState({
    date: "",
    name: "",
    category: "",
    price: 0.0,
    serialNumber: "",
    description: "",
    barcode: "",
    barcodeCombinedName: "",
    itemCollection: [],
    barcodeUrl: "",
    qrCode: "",
    status: "IN",
  });

  const [logsDataForm, setLogsDataForm] = useState({
    name: "",
    action: "CREATED",
    date: "",
    barcode: "",
    id: "",
  });

  const [categoriesDataForm, setCategoriesDataForm] = useState({
    name: "",
    barcode: "",
    barcodeCombinedName: "",
  });



  const { canvasRef, barcode, barcodeObject } = useBarcodeGenerator(
    formData.name,
    setBarcodeState
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    postInventoryData(formData);
    postLogsData(logsDataForm);
    postCategoryData(categoriesDataForm);

  };

  const handleCategoryCheckBox = () => {
    setCustomCategory(!customCategory);
  };

  const addTempItem = () => {
    if (tempItem.trim() === "") {
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
    let today = new Date().toLocaleDateString(undefined, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setFormData({
      ...formData,
      date: today,
      barcode: barcodeState,
      barcodeCombinedName: barcodeState + "_" + formData.name,
    });
    setLogsDataForm({
      ...logsDataForm,
      name: formData.name,
      barcode: barcodeState,
      id: formData.barcodeCombinedName,
      date: today,
    });
    setCategoriesDataForm({
      ...categoriesDataForm,
      name: formData.category,
      barcode: barcodeState,
      barcodeCombinedName: barcodeState + "_" + formData.name,
    })
    console.log('all data', formData, logsDataForm, categoriesDataForm);
  }, [formData.name, barcodeState]);

  useEffect(() => {
    if(categorySubmission){
      console.log('Category Submitted');
    }
    if(categoryError){
      console.log('Category Error:', categoryError);
    }
    if (inventoryData && logsData) {
      navigate("/item-creation-successful");
      // navigate("/");
      // return <CreationSuccessful inventoryData={inventoryData} logsData={logsData} />;
    }
    if (logsError || inventoryError) {
      console.log("Error creating item.");
      console.log("Inventory Error:", inventoryError);
      console.log("Logs Error:", logsError);
      navigate("/item-creation-failure");
    }
  }, [inventoryData, logsData]);

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
            {customCategory === true ? (
              <div className="w-2/3">
                <label htmlFor="location" className="font-bold dark:text-white">
                  <div className="flex">
                    <h2>Category</h2>
                  </div>
                </label>
                <select
                  id="location"
                  name="location"
                  className="text-white active:bg-purple-500 dark:hover:bg-purple-500   bg-purple-500 w-full rounded-xl focus:ring-slate-900 focus:border-slate-900 dark:focus:ring-purple-500 dark:focus:border-purple-500"
                  defaultValue="other"
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  required
                >
                {
                  categories && categories.map(categories => {
                    return (
                      <option value={categories.name} key={categories.id}>{categories.name}</option>
                    );
                  })
                }

                </select>
              </div>
            ) : (
              <label className="w-2/3">
                <h2 className="font-bold  dark:text-white ">Custom Category</h2>
                <input
                  className="w-full rounded-xl dark:text-white dark:bg-purple-500 dark:focus:ring-purple-200 dark:focus:border-2 dark:focus"
                  type="text"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category: e.target.value,
                    })
                  }
                  required
                />
              </label>
            )}
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
              <h2 className="font-bold  dark:text-white ">Serial Number</h2>
              <input
                className="w-full rounded-xl dark:text-white dark:bg-purple-500 dark:focus:ring-purple-200 dark:focus:border-2 dark:focus"
                type="text"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    serialNumber: e.target.value,
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
                  <button
                    className="btn bg-slate-900 text-white dark:text-white "
                    type="button"
                    onClick={addTempItem}
                  >
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
                style={{ display: formData.name ? "block" : "none" }}
                id={formData.name}
              ></canvas>
            </div>
            <div className="flex justify-between  w-full  items-center">
              <button
                type="submit"
                className="btn bg-purple-500 dark:hover:bg-purple-400 text-white  my-5"
              >
                Submit
              </button>
              <div className="flex gap-5">
                <label>
                  <h2>Add Custom Category</h2>
                </label>
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox"
                  onClick={handleCategoryCheckBox}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
