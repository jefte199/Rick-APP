import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from "./components/RickSearch";
import Persons from "./components/Persons";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Search />} />
        <Route path="person/:id" element={<Persons />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
