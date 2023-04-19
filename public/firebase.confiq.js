// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNN3mHa-XP-IBYHbeCRztmeXB58MoHrBw",
  authDomain: "villa-resort.firebaseapp.com",
  projectId: "villa-resort",
  storageBucket: "villa-resort.appspot.com",
  messagingSenderId: "464828141835",
  appId: "1:464828141835:web:f95fe02fb5ffabbd72d20e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export {app}