import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBjwVPvzrTfYl5clNqVkwCLLY7iS5CyILU",
  authDomain: "crwn-clothing-db-1d366.firebaseapp.com",
  databaseURL: "https://crwn-clothing-db-1d366.firebaseio.com",
  projectId: "crwn-clothing-db-1d366",
  storageBucket: "crwn-clothing-db-1d366.appspot.com",
  messagingSenderId: "929233918891",
  appId: "1:929233918891:web:0522b69a470ea74e2590ee",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
