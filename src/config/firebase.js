import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBOEpBmBTY7E1_F4QBVRZEhjQizTYPTFU4",
  authDomain: "northwind-497f2.firebaseapp.com",
  projectId: "northwind-497f2",
  storageBucket: "northwind-497f2.appspot.com",
  messagingSenderId: "14193082062",
  appId: "1:14193082062:web:197ba07fa2944a926d5a9f",
  measurementId: "G-PT53WVRZM6",
};

const app = initializeApp(firebaseConfig);
getAnalytics(app);
const auth = getAuth(app);

export const signUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const signIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);
