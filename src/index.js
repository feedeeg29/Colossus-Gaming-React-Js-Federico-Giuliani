import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  authDomain: "colossus-gaming.firebaseapp.com",
  projectId: "colossus-gaming",
  storageBucket: "colossus-gaming.appspot.com",
  messagingSenderId: "607411017014",
  appId: "1:607411017014:web:5a83cf573b765fd3dd4f97"
};
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
