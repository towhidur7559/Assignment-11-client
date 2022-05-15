import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOdItELRUnN7w2OjGr_tBtvkIAKLSsC04",
  authDomain: "pc-house-ef7fb.firebaseapp.com",
  projectId: "pc-house-ef7fb",
  storageBucket: "pc-house-ef7fb.appspot.com",
  messagingSenderId: "689865953513",
  appId: "1:689865953513:web:7e9a86447f48dc81362078"
};


const app = initializeApp(firebaseConfig);
const auth =getAuth(app);

export default auth;