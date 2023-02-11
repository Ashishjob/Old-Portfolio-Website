// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwNa4731Klh7ZQYUuPTwpDyp1QkjeR2uU",
  authDomain: "portfolio-website-5017e.firebaseapp.com",
  projectId: "portfolio-website-5017e",
  storageBucket: "portfolio-website-5017e.appspot.com",
  messagingSenderId: "124469388544",
  appId: "1:124469388544:web:fb8db6f9bb3fe7ea063fe5",
  measurementId: "G-PSYD7DP7LN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);