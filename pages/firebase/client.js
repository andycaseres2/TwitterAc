import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAFrqjIyU5hSyzRs6AkwNm6QwZT3wgLjbk",

  authDomain: "twitterac-7365c.firebaseapp.com",

  projectId: "twitterac-7365c",

  storageBucket: "twitterac-7365c.appspot.com",

  messagingSenderId: "432084792828",

  appId: "1:432084792828:web:9363339759910c5cf3ee79",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
