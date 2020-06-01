import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBV4a8zsqZ-EirW2SJhgDlzZ1r5AGaX4WQ",
    authDomain: "crwn-db-295c4.firebaseapp.com",
    databaseURL: "https://crwn-db-295c4.firebaseio.com",
    projectId: "crwn-db-295c4",
    storageBucket: "crwn-db-295c4.appspot.com",
    messagingSenderId: "1012277921396",
    appId: "1:1012277921396:web:8685c4a4a00c548edd7321",
    measurementId: "G-1C154EQXVL"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;