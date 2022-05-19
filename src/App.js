import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Cardlist from "./components/Cardlist";
import MovieCard from "./components/MovieCard";
import { data } from "./components/assets/Data";
import Navbar from "./components/Navbar/Navbar";
import Description from "./components/Description/Description";
const App = () => {


  return (
    <div className="container row">
      <Routes>
        <Route path="/" element={<Cardlist />} />
        <Route path="/Description/:id" element={<Description />} />
      </Routes>
    </div>
  );
};

export default App;
