import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTcfzXgjrgD8AUDYhv8Uyal76Chs5L6_U",
    authDomain: "mashop-e4c33.firebaseapp.com",
    databaseURL: "https://mashop-e4c33.firebaseio.com",
    projectId: "mashop-e4c33",
    storageBucket: "mashop-e4c33.appspot.com",
    messagingSenderId: "465629343305",
    appId: "1:465629343305:web:9eee05173a0df509f31998"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;