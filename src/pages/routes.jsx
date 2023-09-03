import React from "react";
import { Route, BrowserRouter, Routes, Router } from "react-router-dom";
import Home from "./Home/Home";
import Galeria from "./Galeria/Galeria";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route exact element={<Home />} path="/" />
        <Route exact element={<Galeria />} path="/galeria" />
      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;
