import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import End from "./Components/End";
import MainBody from "./Components/MainBody";
import AH from "./AtomicHabits";
import HomePage from "./compHolder";
// import { Switch, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/atomichabits" element={<AH />} />{" "}
      </Routes>
    </React.Fragment>
  );
};

export default App;
