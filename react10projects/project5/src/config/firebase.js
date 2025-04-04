// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByXU2oyK1a5uGpziWsPzPjBZ4F31-2mM4",
  authDomain: "contact-85dd5.firebaseapp.com",
  projectId: "contact-85dd5",
  storageBucket: "contact-85dd5.firebasestorage.app",
  messagingSenderId: "370819713736",
  appId: "1:370819713736:web:d6f6000768218645e233fd",
  measurementId: "G-QE4QL7ZTFZ"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const bd = getFirestore(app)