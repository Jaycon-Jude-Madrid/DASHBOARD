// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "test-dashboard-45fb3.firebaseapp.com",
    projectId: "test-dashboard-45fb3",
    storageBucket: "test-dashboard-45fb3.appspot.com",
    messagingSenderId: "1089437752638",
    appId: "1:1089437752638:web:181f1f917ccacae09a206f",
    measurementId: "G-DLS7GEWQD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
export const auth = getAuth();