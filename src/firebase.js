import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8BozmyCVR0M_H0LjiymuIWiigcnTkYNQ",
  authDomain: "chat-247f0.firebaseapp.com",
  projectId: "chat-247f0",
  storageBucket: "chat-247f0.appspot.com",
  messagingSenderId: "423846571199",
  appId: "1:423846571199:web:3418f33fc1f49a25466a0a",
  measurementId: "G-2X4LY07Y45",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
