// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-e46be.firebaseapp.com",
  projectId: "blog-app-e46be",
  storageBucket: "blog-app-e46be.appspot.com",
  messagingSenderId: "954444298604",
  appId: "1:954444298604:web:5f1bd8558c9f45ed5edb49"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);