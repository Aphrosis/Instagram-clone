import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import Header from "./Header.js";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../FireStore.js";
import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import { detail } from "../Action";
import "./style.css";
import { getAuth } from "firebase/auth";
import uniqid from "uniqid";
import {
  collection,
  getDocs,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";

import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { async } from "@firebase/util";
const Searched_User = () => {
  const user = useSelector((state) => state.detail);
  const following = useSelector((state) => state.following);
  const dispatch = useDispatch();
  const [imgg, setimgg] = useState(null);
  const [state, setstate] = useState([]);
  const [img, setimg] = useState([]);
  const { name } = useParams();
  const [follow, setfollow] = useState(false);

  async function fetch_user_img(user) {
    const docRef = doc(db, "Users", user, "user_image", "url");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const obj = docSnap.data();

      setimgg(obj.url);
    } else {
      // doc.data() will be undefined in this case
      // console.log("No such document!");
    }
  }
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        const email = user.email;
        const str = email.split("@")[0];
        dispatch(detail(str));
      } else {
      }
    });
  }, []);
  async function fetchy(user) {
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
      // console.log(error);
    }
  }

  useEffect(() => {
    if (!following) return;
    // console.log(name);
    following.data.map((e) => {
      if (e.name === name) {
        setfollow(true);
        // console.log("??????????????????????????");
      } else {
        // console.log("disocjjjjjjjjjjjjjjjjjjjjjjjj");
      }
    });
  }, [name]);

  useEffect(() => {
    async function fetch() {
      const q = query(collection(db, "Users"), where("name", "==", name));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        fetch_user_img(doc.id);
        fetchy(doc.id);
      });
    }
    fetch();
  }, [name]);
  async function _follow() {
    setfollow(true);
    const Users = collection(db, "Users");

    const q = query(Users, where("name", "==", name));

    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot);
    querySnapshot.forEach((doc) => {
      const size = doc.data().posts
      searched_user(doc.id,size)
    });
  }
  async function _unfollow() {
    setfollow(false);
    await deleteDoc(doc(db, "Users", user, "following", name));
  }
  // console.log(user);
  // console.log(name);
  async function searched_user(doc_id,size) {
    await setDoc(doc(db, "Users", user, "following", name), {
      name: name,
      url: imgg,
      user: doc_id,
      posts:size

    });
  }
  return (
    <>
      <div className="home">
        <Header />
        <div className="user">
          {imgg ? (
            <div
              id="user-image"
              style={{
                backgroundImage: imgg ? `url("${imgg}")  ` : "blue",
                objectFit: "contain",
              }}
            ></div>
          ) : (
            <i className="fa-solid fa-user"></i>
          )}

          <div>
            <div>
              <h2
                style={{
                  margin: "5px",
                }}
              >
                {state?.name}
              </h2>
            </div>
            <div>
              <p className="">0 posts</p>
              <p className="">0 followers</p>
              <p className="">0 following</p>
            </div>
            {follow ? (
              <button
                onClick={() => {
                  _unfollow();
                }}
                id="unfollow"
              >
                unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  _follow();
                }}
                id="follow"
              >
                follow
              </button>
            )}
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

export default Searched_User;
