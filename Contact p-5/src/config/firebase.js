// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXN_2mE_qHmo-VblURHNioGUnkjQVF4rI",
  authDomain: "contact-45b96.firebaseapp.com",
  projectId: "contact-45b96",
  storageBucket: "contact-45b96.firebasestorage.app",
  messagingSenderId: "1004117081383",
  appId: "1:1004117081383:web:03f33b539459b8052dbd02"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);