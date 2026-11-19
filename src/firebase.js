// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq6l55qc3SmP6pmD6d-4lc8kQvmVw921I",
  authDomain: "iakis-portal.firebaseapp.com",
  projectId: "iakis-portal",
  storageBucket: "iakis-portal.firebasestorage.app",
  messagingSenderId: "790777049925",
  appId: "1:790777049925:web:275f56e5a38bc101fac42c",
  measurementId: "G-J62KJV8VDX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);