// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKjLHnUWLXrLhbL_gSxxevM8c1AsxY4-0",
  authDomain: "kyanonassessment.firebaseapp.com",
  projectId: "kyanonassessment",
  storageBucket: "kyanonassessment.appspot.com",
  messagingSenderId: "337494586452",
  appId: "1:337494586452:web:2d51a525707fdd611329c1",
  measurementId: "G-P39VXP400K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);

