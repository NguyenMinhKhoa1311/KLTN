// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyC_3zYWzM1CEyWl1qbl807r-0DvOnC450Y",
  authDomain: "storagekltn-4f1f9.firebaseapp.com",
  projectId: "storagekltn-4f1f9",
  storageBucket: "storagekltn-4f1f9.appspot.com",
  messagingSenderId: "207219053088",
  appId: "1:207219053088:web:793730b272759309196245",
  measurementId: "G-X74MLH2BT7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);