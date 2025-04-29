import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwNy6ZmxYNhAv3U2eZ5D5-YjvSrTIIiFw",
  authDomain: "pequeno-empresario.firebaseapp.com",
  projectId: "pequeno-empresario",
  storageBucket: "pequeno-empresario.firebasestorage.app",
  messagingSenderId: "1006932252069",
  appId: "1:1006932252069:web:6096378f66b06c0676844c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);