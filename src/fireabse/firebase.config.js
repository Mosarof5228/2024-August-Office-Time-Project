// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa43HyB4gOQK9J7dwNGyPXxYjF0AEcEwc",
  authDomain: "office-project-2166e.firebaseapp.com",
  projectId: "office-project-2166e",
  storageBucket: "office-project-2166e.appspot.com",
  messagingSenderId: "672696193071",
  appId: "1:672696193071:web:48bbc7c414eff0af6976da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;