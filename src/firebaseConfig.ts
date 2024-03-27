import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKLLT5Q-LcIB0SA5Qgz-Zwwr3HGgT1Dhk",
  authDomain: "educationalquiz-eb6d2.firebaseapp.com",
  projectId: "educationalquiz-eb6d2",
  storageBucket: "educationalquiz-eb6d2.appspot.com",
  messagingSenderId: "799833997839",
  appId: "1:799833997839:web:38115bbe0c6ff46acc197a",
  measurementId: "G-YR3G9PDWQV",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
