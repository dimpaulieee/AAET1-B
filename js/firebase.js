// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCYTtxWajWspPqkdPggdNHestJ8AYPHto4",
  authDomain: "test-2194f.firebaseapp.com",
  projectId: "test-2194f",
  storageBucket: "test-2194f.firebasestorage.app",
  messagingSenderId: "576691817030",
  appId: "1:576691817030:web:85538c0def38c29d0a5847",
  measurementId: "G-ZXDT8R6Q9C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
