import React from "react";
import Header from "./Header";
import "./style.css";
import Person from "./Person";
import Card from "./Card.js"
import Login from "./Login.js"
import User from "./User"
const Home = () => {
  return (
    <>
    <User/>
      {/* <div className="home">
        <Header />
        <div className="following">
          <Person/>
          <Person/>
          <Person/>
          <Person/>
        </div>
        <div className="cards">
          <Card/>
          <Card/>
          <Card/>
          <Card/>

          
        </div>
      </div> */}
    </>
  );
};

export default Home;
