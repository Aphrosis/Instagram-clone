import React, { useEffect,useState } from "react";
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

import { collection, getDocs } from "firebase/firestore";
import { db } from "../FireStore.js";
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useHistory,
} from "react-router-dom";

const Home = () => {
  const user = useSelector((state) => state.detail);
  const dispatch = useDispatch();
  const [users, setusers] = useState([])
 
  // useEffect(() => {
  //   if(user)
  // }, [])
  useEffect(() => {
    async function fetch(){
     const all_users = await axios.get("http://localhost:5000/all")
     setusers(all_users)
     dispatch(All(all_users))

    }
    fetch()
   }, [])
  
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
 




  return (
    <>
      {/* <img className="image" src="https://img.favpng.com/9/25/24/computer-icons-instagram-logo-sticker-png-favpng-LZmXr3KPyVbr8LkxNML458QV3.jpg" alt="" /> */}
      <div className="">
        <Router>
          <Switch>
            <Route exact path="/user" component={User}></Route>
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
                <Header all_users={users}  />

                <div className="following">
                  <Person />
                  <Person />
                  <Person />
                  <Person />
                </div>
                <div className="cards">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
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
