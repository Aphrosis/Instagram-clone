import React, { useEffect, useState } from "react";
import Header from "./Header";
import "./style.css";
import Person from "./Person";
import Card from "./Card.js";
import Login from "./Login.js";
import User from "./User";
import img from "./index.jpg";
import { useSelector, useDispatch } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import { detail } from "../Action";
import { All } from "../Action";
import {
  collection,
  query,
  orderBy,
  limit,
  getDocs,
  where,
  getDoc,
  updateDoc,
  doc
} from "firebase/firestore";

import Searched_User from "./Searched_User";
import { db } from "../FireStore.js";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";
import { async } from "@firebase/util";

const Home = () => {
  const user = useSelector((state) => state.detail);
  const posts = useSelector((state) => state.posts);
  const [scroll, setscroll] = useState(0)
  const dispatch = useDispatch();
  const [users, setusers] = useState([]);
  
  const following = useSelector((state) => state.following);
  // console.log(user);

  useEffect(() => {
    async function fetch() {
      const all_users = await axios.get("http://localhost:5000/all");
      setusers(all_users);
      dispatch(All(all_users));
     
    }

    fetch();
  }, []);
  
  async function log_out() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(detail(null));
      })
      .catch((error) => {
        // An error happened.
      });
  }
 
//  console.log(posts);
//  console.log(following);
//  console.log(following);
//  console.log(following);
//  console.log(following);

  
  return (
    <>
      {/* <img className="image" src="https://img.favpng.com/9/25/24/computer-icons-instagram-logo-sticker-png-favpng-LZmXr3KPyVbr8LkxNML458QV3.jpg" alt="" />
        */}
      <div className="">
        <Router>
          <Switch>
            <Route exact path="/user" component={User}></Route>
            <Route exact path="/:name" component={Searched_User}></Route>
            {user ? (
              <div className="home ">
                <button
                  id="out"
                  onClick={() => {
                    log_out();
                  }}
                >
                  SIGN OUT
                </button>
                <Header all_users={users} />

                <div className="following">
                  {following
                    ? following.data.map((e) => {
                        if (e.name === "") return;
                        return (
                          <Person key={e.name} name={e.name} url={e.url} />
                        );
                      })
                    : ""}
                </div>
                <div className="cards">
                  {posts?.map((e) => {
                    if(e.url === "") return;
                    return <Card url={e.url} user_image={e.user_image} user_name={e.user_name} />
                  })}
                  <h3>.....Loading</h3>
                </div>
              </div>
            ) : (
              <Login />
            )}
          </Switch>
        </Router>
      </div>
    </>
  );
};

export default Home;
