// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// Import library for the use of the database
import {getFirestore} from 'firebase/firestore'
// Import libraries for authenticationg
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCdfsiDb8bUnOti5Q0uw8X4EA87pUDRUTY",
  authDomain: "blog-project-51884.firebaseapp.com",
  projectId: "blog-project-51884",
  storageBucket: "blog-project-51884.appspot.com",
  messagingSenderId: "655166155555",
  appId: "1:655166155555:web:902eba9a137b8dbd65ba96"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Set up connection to database
export const db = getFirestore(app);

// Set up connection to Firebase authentication and export for use throughout the app
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

