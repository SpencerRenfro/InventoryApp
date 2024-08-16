import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import AddItem from "./pages/AddItem";
import Checkout from "./pages/Checkout";
import InventoryPage from "./pages/InventoryPage";
import CheckIn from "./pages/CheckIn";
import SingleItemInfo from "./pages/ItemInfo";
import SingleBarcode from "./pages/SingleBarcode";
import ItemCreationFailure from "./pages/crud_pages/ItemCreationFailure";
import ItemCreationSuccessful from "./pages/crud_pages/ItemCreationSuccessful";
import ItemManagement from "./pages/ItemManagement";
import LogsTwo from "./components/logs/Logs";

// Components
import Navbar from "./ui/Navbar";
import Modal from "./ui/modal/Modal";
import FilterModal from "./ui/modal/FilterModal";
import StatisticsModal from "./ui/modal/StatisticsModal";





function App() {
  const [showModal, setShowModal] = useState(false);
  const [showStatisticsModal, setShowStatisticsModal] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filter, setFilter] = useState("");

  const modalHandler = (filter, statistics) => {
    setShowModal(true); // Always show the main Modal container

    if (filter) {
      setShowFilterModal(true); // Show the filter modal
    } else {
      setShowFilterModal(false); // Hide the filter modal
    }

    if (statistics) {
      setShowStatisticsModal(true); // Show the statistics modal
    } else {
      setShowStatisticsModal(false); // Hide the statistics modal
    }
  };

  useEffect(() => {
    console.log("filter changed");
    console.log("filter: ", filter);
  }, [filter]);

  return (
    <div className="bg-slate-100 min-h-screen ">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <InventoryPage
              setShowModal={setShowModal}
              categoryFilter={filter}
              modalHandler={modalHandler}
            />
          }
        />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/logs" element={<LogsTwo />} />
        <Route path="/inventory/:id" element={<SingleItemInfo />} />
        <Route path="/inventory/:barcode" element={<SingleBarcode />} />
        <Route path="/item-management" element={<ItemManagement />} />
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
        <Modal onClose={() => setShowModal(false)}>
          {showFilterModal && (
            <FilterModal
              setFilter={setFilter}
              filter={filter}
              onClose={() => {
                setShowFilterModal(false);
                setShowModal(false);
              }}
            />
          )}
          {showStatisticsModal && (
            <StatisticsModal onClose={() => {
              setShowStatisticsModal(false)
              setShowModal(false)
            }} />
          )}
        </Modal>
      )}
    </div>
  );
}

export default App;
