import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIP113i0qAQyqelET7Y-R6eQQmEvb0WKc",
  authDomain: "next-todo-636ec.firebaseapp.com",
  projectId: "next-todo-636ec",
  storageBucket: "next-todo-636ec.appspot.com",
  messagingSenderId: "188171183448",
  appId: "1:188171183448:web:83b1a7e39975c9a38a712d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
