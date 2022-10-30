import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGzqSWW-V2ylOKMHiAXdRsSdRZdQOlNn8",
    authDomain: "linkedin-clone-fe171.firebaseapp.com",
    projectId: "linkedin-clone-fe171",
    storageBucket: "linkedin-clone-fe171.appspot.com",
    messagingSenderId: "916886639102",
    appId: "1:916886639102:web:b158c8b2548307515f30af"
  };

 export  const firebaseapp = initializeApp(firebaseConfig);
 export const db = getFirestore(firebaseapp);
 const auth = getAuth(firebaseapp);