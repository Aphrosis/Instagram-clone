import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import axios from "axios";
import uniqid from "uniqid";
import { detail } from "../Action";
import "./style.css";
import { Following } from "../Action";
import { Posts } from "../Action";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { db } from "../FireStore.js";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [user_name, setuser] = useState("");
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const str = email.split("@")[0];
        dispatch(detail(str));
        _fetch(str);
      } else {
        // User is signed out
        // ...
      }
    });
  }, [user]);

  async function set(email, name) {
    const id1 = uniqid();
    const id2 = uniqid();
    const id3 = uniqid();
    await setDoc(doc(db, "Users", email), {
      name: name,
      url: "",
      posts: 0,
    });
    await setDoc(doc(db, "Users", email, "posts", id1), {
      url: "",
    });
    await setDoc(doc(db, "Users", email, "followers", id2), {
      name: "",
    });
    await setDoc(doc(db, "Users", email, "following", id3), {
      name: "",
    });
  }
  async function SignUp() {
    const p = document.querySelector("#password");
    const e = document.querySelector("#email");

    const user = document.querySelector("#user");
    user.classList.remove("n");
    if (p === "" || e === "") return;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        console.log(user.email);
        const str = email.split("@")[0];
        set(str, user_name);
        if (user) {
          dispatch(detail(str));
        }
        setuser("");
        setemail("");
        setpassword("");

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  async function SignIn() {
    const p = document.querySelector("#password");
    const e = document.querySelector("#email");

    const user = document.querySelector("#user");
    user.classList.add("n");
    if (p === "" || e === "") return;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const email = user.email;
        const str = email.split("@")[0];
        dispatch(detail(str));
        _fetch(str);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }
  async function _fetch(user) {
    const following = await axios.post("http://localhost:5000/follow", {
      data: user,
    });
  
    const data = await axios.post("http://localhost:5000/posts", {
      data: following.data,
    });
    if(!following) return
    dispatch(Following(following));
    dispatch(Posts(data.data));
    
  }
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
            <input
              id="user"
              type="text "
              className="n"
              placeholder="User-Name"
              value={user_name}
              onChange={(e) => {
                setuser(e.target.value);
              }}
            />
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
              required
              placeholder=" email address"
            />
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              required
              placeholder="password"
              name=""
              id=""
            />
            <button
              onClick={() => {
                SignIn();
              }}
            >
              Log in
            </button>
            <p className="">or</p>
            <div>
              <button
                onClick={() => {
                  SignUp();
                }}
                className="btn"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
