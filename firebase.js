import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDu7rZiXHVowDwwkKl8uE3tJlr_bSC-hNg",
  authDomain: "womens-app.firebaseapp.com",
  projectId: "womens-app",
  storageBucket: "womens-app.appspot.com",
  messagingSenderId: "373808914725",
  appId: "1:373808914725:web:59d0e80dfb6807cafdbacc",
  measurementId: "G-V91ZXWK31Q",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
