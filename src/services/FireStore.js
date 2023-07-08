// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJAR4mG_ajkjL_dLhzXPPtrI5t10LCuTw",
  authDomain: "estuardo-558e0.firebaseapp.com",
  projectId: "estuardo-558e0",
  storageBucket: "estuardo-558e0.appspot.com",
  messagingSenderId: "613656104074",
  appId: "1:613656104074:web:4dac1d606d8b898245b173",
  measurementId: "G-33JDP8XRCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app)