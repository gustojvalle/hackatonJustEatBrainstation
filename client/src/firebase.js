import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAxztuZpJlbjwmxkMMpM3r6G_T3oMyzo40",
  authDomain: "charitytakeaway.firebaseapp.com",
  projectId: "charitytakeaway",
  storageBucket: "charitytakeaway.appspot.com",
  messagingSenderId: "198017390517",
  appId: "1:198017390517:web:9304cee2ba84a417916bfc",
  measurementId: "G-T1XV1L1KW4",
};

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
