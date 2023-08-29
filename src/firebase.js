import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBsjd1zgvsKpnwnSLSC05uEMjn2dOJyamI",
  authDomain: "react-notes-c7f46.firebaseapp.com",
  projectId: "react-notes-c7f46",
  storageBucket: "react-notes-c7f46.appspot.com",
  messagingSenderId: "635122582800",
  appId: "1:635122582800:web:008954f3ec48b25219d195"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

export const notesCollection = collection(db, "notes")