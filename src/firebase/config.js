// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDICQiG95dg--7V_60VRa7t_qtFOicc4t8",
  authDomain: "react-38080-ea978.firebaseapp.com",
  projectId: "react-38080-ea978",
  storageBucket: "react-38080-ea978.appspot.com",
  messagingSenderId: "108708235474",
  appId: "1:108708235474:web:77a0c7635736ff3849450b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);