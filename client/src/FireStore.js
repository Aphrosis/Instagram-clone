// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8_ajPc0TWkveWqwjD1YF2HMKLM_NgQsg",
  authDomain: "instagram-clone-d117c.firebaseapp.com",
  projectId: "instagram-clone-d117c",
  storageBucket: "instagram-clone-d117c.appspot.com",
  messagingSenderId: "413989621923",
  appId: "1:413989621923:web:de751959eef0de70562f16",
  measurementId: "G-XSFQQFB163"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

const provider = new GoogleAuthProvider();


export { db, provider, auth };