import React from "react";
import { Route, Routes } from "react-router-dom";
import AddContact from "./components/AddContact";
import Contact from "./components/Contact";
import Home from "./components/Home";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddContact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
