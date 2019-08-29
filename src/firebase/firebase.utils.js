import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyC-WGstHbvmDVo10r_mCWQtEcrlbNogC10",
    authDomain: "crwn-db-50bef.firebaseapp.com",
    databaseURL: "https://crwn-db-50bef.firebaseio.com",
    projectId: "crwn-db-50bef",
    storageBucket: "",
    messagingSenderId: "588843131653",
    appId: "1:588843131653:web:977b4b1803c43864"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;