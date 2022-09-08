import React from "react";
import "../css/SecondHeader.css";
const SecHeader = () => {
  return (
    <React.Fragment>
      <h1 className="why">Why the hell should I read this thing? 😑 </h1>
      <br />
      <p>
        If you are having trouble to change your habits,the problem isn't
        you.The problem is your system.
        <br />
        Bad habits repeat themselves don't because you don't want to change but
        because you have the wrong system for change.
        <br />
        In this book,author James Clear will show you the proven paths from
        Biology,Psycology and Neuroscience for making inevitable the good habits
        and impossible the bad ones. br
        <br />
        <p>
          <i>
            Although I will not be able to discuss the hole 300 pages book,but I
            will try my best to share with you all the best lessons.Hope you
            will enjoy 😄
          </i>
        </p>
      </p>
      {/* <p>
        The main reason to read this book is{" "}
        <span style={{ backgroundColor: "orange" }}>Building Habits</span>
        We struggle to build a good habit and eliminate the bad one.We also
        struggle to do the work that actually matters.We simply
        procastinate(বিলম্বিত করা) that.
        <br />
        In this book , author(writer) gives us some easy simple ways and tricks
        to beat these unwanted problems,while building a new habit and
        destroying the bad one and to stop procatinating and much more!
        <br />
        And in this summary,I am gonnna try to share the best of them with you!
      </p> */}
      {/* What will you learn after reading this ? */}
      <h1 className="whatwillyoulean">What's the benefit 🤔 ?</h1>
      <p>
        Well,after reading any book--any kind(genre) of book,you will not learn
        only what the title belongs to..Rather than you will learn many new
        things 🥶 .
        <br />
        Such in the case with this book.
        <br />
        <br />
        Well in this book,you are gonna learn :-
        <br />
        <ul>
          <li>How to build a new habit</li>
          <li>Eliminate the bad one</li>
          <li>How to stop PROCASTNATION</li>
          <li>
            How to be more productive (Well the meaning of productive here I
            meant by is :A state of mind(মনের অবস্থা),a philosophy of life. - "
            <i>
              <b>ADOPTING AN ATTITUDE FOR CONTINUIED IMPROVEMENT </b>
            </i>
            🤯 ")
          </li>
        </ul>
      </p>
      <br />
      <br />
      <h1 style={{ textAlign: "center" }}>
        Have a great journey 👍
        <br /> <br /> ↓{" "}
      </h1>
      <br />
      <br />
      <h1
        className="start"
        style={{ textAlign: "center", marginTop: "3rem", color: "black" }}
      >
        So let's get Started!
      </h1>
      <br />
      {/* <img src="../img/atomichabitspage.png" alt="Page Pic" /> <br /> */}
      <br /> <br /> <br />
      <p style={{ textAlign: "center" }}>
        <i>
          "One person might learn to reduce stress by smoking a
          cigarrete.Another person learns to by going for a run.
          <br />
          <br />
          Your current habits are not necessarily the best way to solve the
          problem you face ;Their just the method you learn to use". <br />
          -James Clear
        </i>
      </p>
      <br />
    </React.Fragment>
  );
};

export default SecHeader;
