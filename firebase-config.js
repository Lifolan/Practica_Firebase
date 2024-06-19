// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwwHz82S41Vq46Z3aifjbJOKm-0l6Tbu8",
  authDomain: "dankeprojekt-b3053.firebaseapp.com",
  projectId: "dankeprojekt-b3053",
  storageBucket: "dankeprojekt-b3053.appspot.com",
  messagingSenderId: "536435250626",
  appId: "1:536435250626:web:6069d6dd8d7cc15c2df25b",
  measurementId: "G-2PQH0S30MN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage};
