// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCq4UTI7GVKYa-KWAYGrfP93I-Dx0S4X6A",
  authDomain: "educationalquiz-c87d4.firebaseapp.com",
  projectId: "educationalquiz-c87d4",
  storageBucket: "educationalquiz-c87d4.appspot.com",
  messagingSenderId: "1079673630831",
  appId: "1:1079673630831:web:ec99f87165e053a1d4dd9a",
  measurementId: "G-K56GNBDXYY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({   
  prompt : "select_account "
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);