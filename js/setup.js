// setup.js - Run this once to set up your Firestore database
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCYTtxWajWspPqkdPggdNHestJ8AYPHto4",
  authDomain: "test-2194f.firebaseapp.com",
  projectId: "test-2194f",
  storageBucket: "test-2194f.appspot.com",
  messagingSenderId: "576691817030",
  appId: "1:576691817030:web:85538c0def38c29d0a5847",
  measurementId: "G-ZXDT8R6Q9C"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function setupDatabase() {
  try {
    // Create section info
    await setDoc(doc(db, 'sectionInfo', 'AAET1B'), {
      motto: 'Excellence, Unity, and Growth',
      updatedAt: new Date().toISOString()
    });
    
    console.log('✅ Database setup complete!');
    console.log('Section motto set to: Excellence, Unity, and Growth');
    
  } catch (error) {
    console.error('Error setting up database:', error);
  }
}

// Run setup
setupDatabase();
