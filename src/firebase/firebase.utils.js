import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD767y2YHKLG6QeGhx_iLeExqJ3AYEjYls",
  authDomain: "crwn-db-4b175.firebaseapp.com",
  databaseURL: "https://crwn-db-4b175.firebaseio.com",
  projectId: "crwn-db-4b175",
  storageBucket: "",
  messagingSenderId: "297546065736",
  appId: "1:297546065736:web:28ff2557f5108b6b14f57d"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup();

export default firebase;
