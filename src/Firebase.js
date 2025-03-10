import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBdB9o-rR7ur3Azsx63pXbXEufvvlu5JoM",
    authDomain: "online-store-456aa.firebaseapp.com",
    projectId: "online-store-456aa",
    storageBucket: "online-store-456aa.firebasestorage.app",
    messagingSenderId: "679803315162",
    appId: "1:679803315162:web:c0455c8ff42d3ae4de16e3",
    measurementId: "G-BM0R6KFK2R"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Firestore
export const auth = getAuth(app); // Authentication