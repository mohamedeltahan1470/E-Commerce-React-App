// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth   } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyb0pUtzo_V3dnmhtV4WY3sWr8UdmVD8c",
  authDomain: "e-commerce-7e236.firebaseapp.com",
  projectId: "e-commerce-7e236",
  storageBucket: "e-commerce-7e236.appspot.com",
  messagingSenderId: "252018186736",
  appId: "1:252018186736:web:91bcde4033aa648fd46535",
  measurementId: "G-M7Q3E52WDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);