import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from "./components/RickSearch";
import Persons from "./components/Persons";
import Ep from "./components/Ep";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Search />} />
        <Route path="person/:id" element={<Persons />} />
        <Route path="person/:id/ep/:ep" element={<Ep />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
