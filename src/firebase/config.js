import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsfY3Ncb3eTu1kJR74f7ks9cwT4bfvvB0",
  authDomain: "j089-372a5.firebaseapp.com",
  projectId: "j089-372a5",
  storageBucket: "j089-372a5.firebasestorage.app",
  messagingSenderId: "899093419631",
  appId: "1:899093419631:web:8900b6b590dd24914c5f9a"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}