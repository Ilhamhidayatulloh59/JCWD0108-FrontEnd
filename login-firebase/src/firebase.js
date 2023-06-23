// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth  } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQP5YM8Xj4eJPdrXu7epRGtejvIHfh_Cc",
  authDomain: "login-firebase-494e5.firebaseapp.com",
  projectId: "login-firebase-494e5",
  storageBucket: "login-firebase-494e5.appspot.com",
  messagingSenderId: "865943212138",
  appId: "1:865943212138:web:059b4c7219dc01321a7a13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)