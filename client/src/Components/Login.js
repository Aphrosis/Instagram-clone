import React from "react";
import "./style.css";
const Login = () => {
  return (
    <>
      <div className="login">
        <img
          src="https://www.instagram.com/static/images/homepage/screenshot1-2x.jpg/9144d6673849.jpg"
          alt=""
        />
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png"
            alt=""
          />
          <div className="form">
              <input type="text" placeholder="phone number , email address" />
              <input type="password" placeholder="password" name="" id="" />
              <button>Log in</button>
              <p className="">or</p>
              <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUtFbfiQ8bERczVpXCDIR3Np_h5X-UIbmMsXkPQ0_7e5DWeA2DhZOAlGlrDx2Ar1UjL58&usqp=CAU" alt="" />
              <p className="">facebook login</p>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
