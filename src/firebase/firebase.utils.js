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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await userRef.set( {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) { 
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
}

export const convertCollectionSnapshotToMap = collections => {
    const trnasfromedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    });

    return trnasfromedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;