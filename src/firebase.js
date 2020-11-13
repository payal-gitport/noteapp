import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCTxTffPbYct0A4Pn4c8aR2sUcv5Ya9OEk",
    authDomain: "noteapp-1ac63.firebaseapp.com",
    databaseURL: "https://noteapp-1ac63.firebaseio.com",
    projectId: "noteapp-1ac63",
    storageBucket: "noteapp-1ac63.appspot.com",
    messagingSenderId: "139135429153",
    appId: "1:139135429153:web:a457e16fac161c88295160",
    measurementId: "G-THRJM26L7T"
  };

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();
