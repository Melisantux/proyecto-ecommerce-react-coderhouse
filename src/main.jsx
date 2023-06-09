import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from 'firebase/app';

import App from './App.jsx';
import './index.css';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyB9roFJcF742VEqlEgsmsnm5VhNwec2iPo',
  authDomain: 'poke-collector-eccomerce.firebaseapp.com',
  projectId: 'poke-collector-eccomerce',
  storageBucket: 'poke-collector-eccomerce.appspot.com',
  messagingSenderId: '970721930065',
  appId: '1:970721930065:web:b28f041fc0f5b748f8c170',
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
