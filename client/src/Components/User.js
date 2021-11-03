import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header.js";
const User = () => {
  
  return (
    <>
      <div className="home">
        <Header />
        <div className=" user">
          <i className="fa-solid fa-user"></i>
          <div>
            <div>
              <h2>Kla lala</h2>
            </div>
            <div>
              <p className="">1 posts</p>
              <p className="">0 followers</p>
              <p className="">6 following</p>
            </div>
          </div>
        </div>
        <div className="user-posts">
          <hr />
        </div>
      </div>

      <div className="img">
        <div>
          <img
            id="img"
            src="https://images.unsplash.com/photo-1634638591750-cf2f8662944e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
            alt="helo"
          />
          <img
            src="https://images.unsplash.com/photo-1634638591750-cf2f8662944e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
            alt="helo"
          />
          <img
            src="https://images.unsplash.com/photo-1634638591750-cf2f8662944e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=697&q=80"
            alt="helo"
          />
        </div>
      </div>
    </>
  );
};

export default User;
