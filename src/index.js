import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);


//   var firebaseConfig = {
//     apiKey: "AIzaSyCTcfzXgjrgD8AUDYhv8Uyal76Chs5L6_U",
//     authDomain: "mashop-e4c33.firebaseapp.com",
//     databaseURL: "https://mashop-e4c33.firebaseio.com",
//     projectId: "mashop-e4c33",
//     storageBucket: "mashop-e4c33.appspot.com",
//     messagingSenderId: "465629343305",
//     appId: "1:465629343305:web:9eee05173a0df509f31998"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);