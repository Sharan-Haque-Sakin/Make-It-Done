import React from "react";
import "../css/booksContainer.css";
import atomicHabits from "../img/atomichabits.png";
const BooksContainer = () => {
  return (
    <div className="booksContainer">
      <div className="atomicHabits">
        <img src={atomicHabits} alt="Atomic Habits book picture" id="AH_pic" />
        <article className="bookDetails">
          <a href="/atomichabits" style={{ textDecoration: "none" }}>
            <h2 className="bookName">Atomic Habits</h2>
          </a>
          <div className="bookPara">
            The best book on building Habit! It shows you how you can make huge
            differences by only making small changes.Like reading only 1 line
            per day to be a book reader
          </div>
        </article>
      </div>
    </div>
  );
};

export default BooksContainer;
