import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAVnbgDp6VJ0bPWgSddVY8GgnL9suhT2VU",
  authDomain: "school-directory-65cfb.firebaseapp.com",
  projectId: "school-directory-65cfb",
  storageBucket: "school-directory-65cfb.appspot.com",
  messagingSenderId: "572084008583",
  appId: "1:572084008583:web:8ec2f1dc787b2c998e2a22",
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
