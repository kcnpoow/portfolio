// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDcPHVj6XDl0pMz1VUgVSHi42YcylfsR6Q",
  authDomain: "portfolio-4ddf5.firebaseapp.com",
  projectId: "portfolio-4ddf5",
  storageBucket: "portfolio-4ddf5.firebasestorage.app",
  messagingSenderId: "886402715776",
  appId: "1:886402715776:web:4ea8869800cc15e8509665",
  measurementId: "G-G2W1WEPCNR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);