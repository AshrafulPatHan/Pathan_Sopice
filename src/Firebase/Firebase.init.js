// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdinHhMFT_0L2UPBI-dqggbC0npk4prV0",
  authDomain: "pathansopice.firebaseapp.com",
  projectId: "pathansopice",
  storageBucket: "pathansopice.firebasestorage.app",
  messagingSenderId: "69770163",
  appId: "1:69770163:web:153e1f6aef824b8bd189c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;