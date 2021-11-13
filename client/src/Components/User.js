import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Header from "./Header.js";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../FireStore.js";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { detail } from "../Action";
import "./style.css";
import { getAuth } from "firebase/auth";
import uniqid from "uniqid";
import { useDispatch } from "react-redux";
const User = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const [imgg, setimgg] = useState(null);
  const user = useSelector((state) => state.detail);
  const [state, setstate] = useState([]);
  const [img, setimg] = useState([]);

  async function fetch_user_img(user){
    const docRef = doc(db, "Users", user, "user_image", "url");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const obj = docSnap.data()
      console.log("Document data:", docSnap.data());
      setimgg(obj.url)
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
   }

  async function handleChange(e) {
    const selected = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = async () => {
      setimgg(reader.result);
      const data = await axios.post("http://localhost:5000/user_img", {
        data: reader.result,
        user: user,
        name:state.name
      });
    };
    reader.readAsDataURL(selected);
  }
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const str = email.split("@")[0];
        dispatch(detail(str));
        fetch_user_img(str)
        fetch(str);
      } else {
      }
    });
  }, []);
  function click(e) {
    e.preventDefault();
    inputRef.current.click();
  }
  async function fetch(user) {
    if (!user) return;
    try {
      const data = await axios.post("http://localhost:5000/user", {
        data: user,
      });
      const img = await axios.post("http://localhost:5000/img", {
        data: user,
      });
      setstate(data.data);
      setimg(img.data);
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <>
      <div className="home">
        <Header />
        <div className="user">
          {imgg ? (
            <div
              id="user-image"
              onClick={(e) => {
                click(e);
              }}
              style={{
                backgroundImage: imgg ? `url("${imgg}")  ` : "blue",
                objectFit: "contain",
              }}
            ></div>
          ) : (
            <i
              onClick={(e) => {
                click(e);
              }}
              className="fa-solid fa-user"
            ></i>
          )}
          <input
            ref={inputRef}
            style={{
              display: "none",
            }}
            type="file"
            placeholder="click"
            accept="image/*"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <div>
            <div>
              <h2>{state?.name}</h2>
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
          {img.map((e) => {
            const url = e.url;
            if (url === "") return;
            
            const text = url.split("upload")[1];
           
            return (
              <img
                src={`https://res.cloudinary.com/dwqr1vexm/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai${text}`}
                alt="img"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default User;
