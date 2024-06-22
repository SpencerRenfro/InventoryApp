import React, { useState } from 'react';

import { Routes, Route } from 'react-router-dom';
//pages
import AddItem from './pages/AddItem';
import Checkout from './pages/Checkout';
import Inventory from './pages/Inventory';
import CheckIn from './pages/CheckIn';
import Logs from './pages/Logs';
import SingleItemInfo from './pages/ItemInfo';
import SingleBarcode from './pages/SingleBarcode';
//components
import Navbar from './UI/Navbar';

function App() {
  return (
    <div className='dark:bg-slate-900'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/check-in" element={<CheckIn />} />
        <Route path="/logs" element={<Logs />} />
        <Route path="inventory/:id" element={<SingleItemInfo />} />
        <Route path="inventory/:barcode" element={<SingleBarcode />} />
      </Routes>

    </div>
  );
}

export default App;
