// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.apiKey,
  projectId: process.env.apiKey,
  storageBucket: process.env.apiKey,
  messagingSenderId: process.env.apiKey,
  appId: process.env.apiKey
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);