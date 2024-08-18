import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCzAFsaJOaVTpyEIeZsTJ4Fz7IFBLTj-38",
  authDomain: "fcomm-choirs.firebaseapp.com",
  projectId: "fcomm-choirs",
  storageBucket: "fcomm-choirs.appspot.com",
  messagingSenderId: "112159045252",
  appId: "1:112159045252:web:0cb35014180360230a34d1",
  measurementId: "G-VGQL22E6JM",
  databaseURL:  "https://fcomm-choirs-default-rtdb.firebaseio.com"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(app)
const database = getDatabase(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App storage={storage} database={database} />
);


