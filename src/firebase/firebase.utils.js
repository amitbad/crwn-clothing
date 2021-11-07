// import firebase from 'firebase/app';
// import 'firebase/firestore'
// import 'firebase/auth'

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
	apiKey: 'AIzaSyC3hdNuvXgsOg6WaWuZC0GJrpi557oi550',
	authDomain: 'crwn-db-ac9fb.firebaseapp.com',
	projectId: 'crwn-db-ac9fb',
	storageBucket: 'crwn-db-ac9fb.appspot.com',
	messagingSenderId: '133693761560',
	appId: '1:133693761560:web:48009938699212b0ef7b6d',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
