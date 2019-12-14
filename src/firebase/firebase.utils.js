import firebase from 'firebase';
import 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAe03EPuWULUzwX2c2qEoj53c6LmVdyhKg",
    authDomain: "crwn-db-reactjs.firebaseapp.com",
    databaseURL: "https://crwn-db-reactjs.firebaseio.com",
    projectId: "crwn-db-reactjs",
    storageBucket: "crwn-db-reactjs.appspot.com",
    messagingSenderId: "580674919610",
    appId: "1:580674919610:web:e01b122dd7345ab09fb683",
    measurementId: "G-Z01RPNYH9L"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const  signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;