import React from "react";
import "../css/MainBody.css";
import BooksContainer from "./booksContainer";
const MainBody = () => {
  return (
    <div className="mainContainer">
      <h1 className="mainHeader">Explore</h1>
      <h1 className="mainHeader">↓</h1>
      <i>Click on Any book title to Warp into it</i>
      <BooksContainer />
    </div>
  );
};

export default MainBody;
