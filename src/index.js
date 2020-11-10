import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase/app'


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


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
