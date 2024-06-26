import React, { useState, useEffect } from "react";

import { Routes, Route } from "react-router-dom";
//pages
import AddItem from "./pages/AddItem";
import Checkout from "./pages/Checkout";
import Inventory from "./pages/Inventory";
import CheckIn from "./pages/CheckIn";
import Logs from "./pages/Logs";
import SingleItemInfo from "./pages/ItemInfo";
import SingleBarcode from "./pages/SingleBarcode";
import ItemCreationFailure from "./pages/ItemCreationFailure";
import ItemCreationSuccessful from "./pages/ItemCreationSuccessful";
//components
import Navbar from "./ui/Navbar";
import Modal from "./ui/modal/Modal";
import FilterModal from "./ui/modal/FilterModal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState("");
  const modalHandler = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    console.log("filter changed");
    console.log("filter: ", filter);
  }, [filter]);

  return (
    <div className="dark:bg-slate-900 min-h-screen ">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Inventory setShowModal={setShowModal} categoryFilter={filter} />
          }
        />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="inventory/:id" element={<SingleItemInfo />} />
        <Route path="inventory/:barcode" element={<SingleBarcode />} />
        <Route
          path="/item-creation-successful"
          element={<ItemCreationSuccessful />}
        />
        <Route
          path="/item-creation-failure"
          element={<ItemCreationFailure />}
        />
      </Routes>
      {showModal && (
        <Modal onClose={modalHandler}>
          <FilterModal setFilter={setFilter} filter={filter} />
        </Modal>
      )}
    </div>
  );
}

export default App;
