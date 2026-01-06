// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-ybki_Ir78to65s6z0xa33lceJnLMIng",
  authDomain: "portfolio-like-8653e.firebaseapp.com",
  projectId: "portfolio-like-8653e",
  storageBucket: "portfolio-like-8653e.firebasestorage.app",
  messagingSenderId: "923194004696",
  appId: "1:923194004696:web:c903d51b46cc5a856df3ad",
  measurementId: "G-4R2SZYSHF9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const mydb = getFirestore(app);
