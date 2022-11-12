import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import NavBar from "../navBar/NavBar.jsx"
import Publications from "../publications/Publications.jsx"
import AddForm from "../addForm/AddForm.jsx"

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Publications />} />
            <Route path="/addForm" element={<AddForm />} />

            <Route path="*" element={<Publications />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
