// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjqh6Gv0gEVRmLqAsrTHB5dwbEp3z9WFQ",
  authDomain: "react-chat-app-ca7c6.firebaseapp.com",
  projectId: "react-chat-app-ca7c6",
  storageBucket: "react-chat-app-ca7c6.appspot.com",
  messagingSenderId: "627507512271",
  appId: "1:627507512271:web:400aa054f26d90ec8c08ba",
  measurementId: "G-SQ0M674WN1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
