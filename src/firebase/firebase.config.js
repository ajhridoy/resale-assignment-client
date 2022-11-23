// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBLUASBWEXrjvkM0cl_KHQb7nT0cK5vgig",
  authDomain: "resale-assignment.firebaseapp.com",
  projectId: "resale-assignment",
  storageBucket: "resale-assignment.appspot.com",
  messagingSenderId: "479693521591",
  appId: "1:479693521591:web:2ee38bb4ab12833465c332"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;