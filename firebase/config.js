// Import the functions you need from the SDKs you need
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_2ZRI9mgUuFW5JorssdG1qOwChtXCcBQ",
  authDomain: "hackathon-279db.firebaseapp.com",
  databaseURL: "https://hackathon-279db-default-rtdb.firebaseio.com",
  projectId: "hackathon-279db",
  storageBucket: "hackathon-279db.firebasestorage.app",
  messagingSenderId: "306789052512",
  appId: "1:306789052512:web:564f2562a59b78e6dcd305",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { app, auth, db };
