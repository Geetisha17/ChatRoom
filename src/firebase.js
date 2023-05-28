// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";//ref
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBD1jw9_9Y9G6myTysZoQ85rM_dHVnJyfY",
  authDomain: "chatroom-b3653.firebaseapp.com",
  projectId: "chatroom-b3653",
  storageBucket: "chatroom-b3653.appspot.com",
  messagingSenderId: "456173109202",
  appId: "1:456173109202:web:b8276604f75ba886b7120b",
  measurementId: "G-5ZXQL50DHG"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
 const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();

