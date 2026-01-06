// js/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCYTtxWajWspPqkdPggdNHestJ8AYPHto4",
  authDomain: "test-2194f.firebaseapp.com",
  projectId: "test-2194f",
  storageBucket: "test-2194f.appspot.com",
  messagingSenderId: "576691817030",
  appId: "1:576691817030:web:85538c0def38c29d0a5847",
  measurementId: "G-ZXDT8R6Q9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const auth = getAuth(app);
export const db = getFirestore(app);

// Ensure we're using the correct project
console.log('Firebase initialized for project:', firebaseConfig.projectId);
