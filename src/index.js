import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCzAFsaJOaVTpyEIeZsTJ4Fz7IFBLTj-38",
  authDomain: "fcomm-choirs.firebaseapp.com",
  projectId: "fcomm-choirs",
  storageBucket: "fcomm-choirs.appspot.com",
  messagingSenderId: "112159045252",
  appId: "1:112159045252:web:0cb35014180360230a34d1",
  measurementId: "G-VGQL22E6JM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


