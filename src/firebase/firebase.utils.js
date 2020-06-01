import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAoWjrz4_y3HagS782qncs198D_aUh1fXE",
  authDomain: "redux-implementation.firebaseapp.com",
  databaseURL: "https://redux-implementation.firebaseio.com",
  projectId: "redux-implementation",
  storageBucket: "redux-implementation.appspot.com",
  messagingSenderId: "536430847850",
  appId: "1:536430847850:web:f151fc93163d4a9dbca713",
  measurementId: "G-1TJD0FVJ5C"
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