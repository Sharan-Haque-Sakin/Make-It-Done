import React from "react";
import "../css/Header.css";
import welcome from "../img/welcome.jpeg";
import Quote from "../img/Quotes.jpg";
const TopHeader = () => {
  return (
    <React.Fragment>
      <div className="ContainerHeader">
        <img src={Quote} alt="Welcome Image" className="welcomeImg" />
        <div className="TopHeader">
        <h1 className="welcomeHead">Make It Done!</h1>
          <h2>
            Welcome to Make It Done!Here you can find book
            summaries,reviews,articles and many more!
            <span className="mark">
              This website is mainly for book Readers specially for those who
              want to read books..
            </span>
            And
            <span className="mark">
              also for motivating them who don't read books because they think
              that it's very boring to read a book.
            </span>
            But no it's not!Scroll and explore and I promise that your
            misconceptions will be gone!
          </h2>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopHeader;
