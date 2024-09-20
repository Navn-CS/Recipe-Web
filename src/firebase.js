// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAouPuK2zXl3g8JyBVaK2ERlPvN3sB0Qes",
  authDomain: "recipe-web-b114b.firebaseapp.com",
  projectId: "recipe-web-b114b",
  storageBucket: "recipe-web-b114b.appspot.com",
  messagingSenderId: "826539763386",
  appId: "1:826539763386:web:f8ead4a1536b3fd3f00483",
  measurementId: "G-E9QSTL5SSG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app); // Get Firestore instance

// Export the Firestore instance
export { db };
