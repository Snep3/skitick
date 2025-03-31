// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBEMB91q8LimediUyahDQAoFMc73E1WcB8",
    authDomain: "studyproject-e81dc.firebaseapp.com",
    projectId: "studyproject-e81dc",
    storageBucket: "studyproject-e81dc.firebasestorage.app",
    messagingSenderId: "689819119211",
    appId: "1:689819119211:web:0ba0c0d3003aaeaf8ecb2e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


