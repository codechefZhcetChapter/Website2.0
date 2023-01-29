import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
require("firebase/firestore");



const firebaseConfig = {
    apiKey: "AIzaSyDEK7ey23v2fzdaY7seabYDrAcMa_4v-uc",
  authDomain: "codechef-91fc1.firebaseapp.com",
  projectId: "codechef-91fc1",
  storageBucket: "codechef-91fc1.appspot.com",
  messagingSenderId: "807099913335",
  appId: "1:807099913335:web:a195db34fc23abf366e272"
  };


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);



export { auth, db, storage };