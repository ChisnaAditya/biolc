// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDEVo0ooIJNzUMvIsf9TSpKXzQ53ZoEq3A",
  authDomain: "biokilc.firebaseapp.com",
  databaseURL:
    "https://biokilc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "biokilc",
  storageBucket: "biokilc.appspot.com",
  messagingSenderId: "835163752693",
  appId: "1:835163752693:web:1bc780b748d27f87c69dbc",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
