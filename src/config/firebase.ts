// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCSsXb-Cg78yDvmCELa9LO-mF-nBegFPE4",
  authDomain: "localizationtool-3ce7f.firebaseapp.com",
  databaseURL: "https://localizationtool-3ce7f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "localizationtool-3ce7f",
  storageBucket: "localizationtool-3ce7f.appspot.com",
  messagingSenderId: "38045327320",
  appId: "1:38045327320:web:9702e5c4054e8ec7591cad",
  measurementId: "G-ZFKMENKG0F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
