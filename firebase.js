import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAJbV-4t1OXn0ro-QRXE2ZL_RRUPxaR5l8",
  authDomain: "jobnest-india.firebaseapp.com",
  projectId: "jobnest-india",
  storageBucket: "jobnest-india.firebasestorage.app",
  messagingSenderId: "858790166184",
  appId: "1:858790166184:web:681352a67cf4c00478cc9d",
  measurementId: "G-FYBTH8TYMC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

export {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
};
