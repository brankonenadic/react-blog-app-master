// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYTzdyRhhvLqRbPtFjN-6_JnAvWAuKEAg",
  authDomain: "myblog-f1dcb.firebaseapp.com",
  projectId: "myblog-f1dcb",
  storageBucket: "myblog-f1dcb.appspot.com",
  messagingSenderId: "1010536552786",
  appId: "1:1010536552786:web:43a3492b2b75a2ad46828b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();