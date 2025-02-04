// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpR-7Yd8lDhoFs5exPp30n7m9x8NwOf3E",
  authDomain: "aniwatch-a523e.firebaseapp.com",
  projectId: "aniwatch-a523e",
  storageBucket: "aniwatch-a523e.appspot.com",
  messagingSenderId: "132592347161",
  appId: "1:132592347161:web:b01d021c630a746d836288",
  measurementId: "G-FTH4TLLGRK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);