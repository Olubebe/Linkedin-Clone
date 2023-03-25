import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAaPRqq8fHKpbtYF857YmvgxIU_-wPpKwc",
  authDomain: "linkedin-clone-a1357.firebaseapp.com",
  projectId: "linkedin-clone-a1357",
  storageBucket: "linkedin-clone-a1357.appspot.com",
  messagingSenderId: "702216883551",
  appId: "1:702216883551:web:2fc418d0cb3ec947b97aea",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export { db, auth };
