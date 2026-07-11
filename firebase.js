import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDNM0ryNPMPX705vFdKxvBCpF8a5shefE8",
  authDomain: "fluxo-de-grade-das-disciplinas.firebaseapp.com",
  projectId: "fluxo-de-grade-das-disciplinas",
  storageBucket: "fluxo-de-grade-das-disciplinas.firebasestorage.app",
  messagingSenderId: "324299845565",
  appId: "1:324299845565:web:adb9c3c5bbcef85d6eecd4"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
  firebaseConfig,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc
};