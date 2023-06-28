import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "clone-7e415.firebaseapp.com",
  projectId: "clone-7e415",
  storageBucket: "clone-7e415.appspot.com",
  messagingSenderId: "184987283656",
  appId: "1:184987283656:web:45a72ca98c9d01ce5235fd",
  measurementId: "G-F2XRD9LZPD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };