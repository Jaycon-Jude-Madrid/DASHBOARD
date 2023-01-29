// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDyfu4k3NFCne2m8JppNna7YR34o2bj4gw",
    authDomain: "dashboard-pos-27c8e.firebaseapp.com",
    projectId: "dashboard-pos-27c8e",
    storageBucket: "dashboard-pos-27c8e.appspot.com",
    messagingSenderId: "645900324274",
    appId: "1:645900324274:web:9a6d91a16006969d1828ab",
    measurementId: "G-DRTYM1PG6S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);