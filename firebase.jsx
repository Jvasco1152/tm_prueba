// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-TJ39Fgj7nyKx7WB8DPdbJfdiKI_KjwU",
  authDomain: "prueba-tm-76a3a.firebaseapp.com",
  projectId: "prueba-tm-76a3a",
  storageBucket: "prueba-tm-76a3a.appspot.com",
  messagingSenderId: "560249525892",
  appId: "1:560249525892:web:615f440c65c9f1e74f94d1"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }