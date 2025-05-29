// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZjm4U4l3_b4JUbFAO1E7JdUVtLqkIKCs",
  authDomain: "testfriendlyconf.firebaseapp.com",
  projectId: "testfriendlyconf",
  storageBucket: "testfriendlyconf.firebasestorage.app",
  messagingSenderId: "1029742422566",
  appId: "1:1029742422566:web:3235b272a067519c2f54e7",
  measurementId: "G-X03YBVK77Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);