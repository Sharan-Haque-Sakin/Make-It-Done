import React from "react";
import "./css/index.css";
import SecHeader from "./Components/SecHeader";
import MainPart from "./Components/MainPart";
const AH = () => {
  return (
    <div className="Container">
      {/* First Header (Main) */}
      <div className="topHeader">
        <h1 className="mainHeader">Atomic Habits</h1>
        <h3 style={{ textAlign: "center", marginTop: "0rem" }}>
          by JAMES CLEAR
        </h3>

        {/* Second Header  */}
        <div className="secHeader">
          <SecHeader />
          <MainPart />
        </div>
      </div>
    </div>
  );
};

export default AH;
