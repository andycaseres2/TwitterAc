import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBp--F4wbS2YhzpMAjZGlkZ6nleWX47vek",

  authDomain: "twitterac-58897.firebaseapp.com",

  projectId: "twitterac-58897",

  storageBucket: "twitterac-58897.appspot.com",

  messagingSenderId: "1056523492167",

  appId: "1:1056523492167:web:356bfa33ebeddf1b8c8a62",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
