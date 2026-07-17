import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  getDocs,
  query,
  where
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-storage.js";

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
const storage = getStorage(app);

export {
  app,
  db,
  storage,
  firebaseConfig,
  collection,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  getDocs,
  query,
  where,
  ref,
  uploadBytes,
  getDownloadURL
};