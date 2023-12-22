import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC2bp5CjeW4c3B1QhQFBGOh9CNQti181Pk",
  authDomain: "productosef-c33e0.firebaseapp.com",
  projectId: "productosef-c33e0",
  storageBucket: "productosef-c33e0.appspot.com",
  messagingSenderId: "935666576810",
  appId: "1:935666576810:web:3139cb23602392e1c44fd3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);