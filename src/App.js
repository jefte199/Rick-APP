import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Search from "./components/RickSearch";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
