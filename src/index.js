import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCzRuLhaYc8EzVtI254jx18uCC3MTQNDNM",
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
