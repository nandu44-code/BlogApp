// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFhp1dCfLyj5GrciAAfoNp4mGrlfqXJLA",
  authDomain: "blog-app-80a8f.firebaseapp.com",
  projectId: "blog-app-80a8f",
  storageBucket: "blog-app-80a8f.appspot.com",
  messagingSenderId: "971200649909",
  appId: "1:971200649909:web:9d4804b220a5e9313d7cfc",
  measurementId: "G-87VY5PYP5M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();