// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,signInWithPopup,FacebookAuthProvider} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALprveAW54-RxdRDd6buKQYj8h7Catmbw",
  authDomain: "auth-cd69f.firebaseapp.com",
  projectId: "auth-cd69f",
  storageBucket: "auth-cd69f.appspot.com",
  messagingSenderId: "165469937244",
  appId: "1:165469937244:web:20db8c820e00b2a83ad099"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
const provider=new GoogleAuthProvider();
const provide=new FacebookAuthProvider();
export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((result)=>{
        console.log(result);
    }).catch((err)=>{
        console.log(err);
    });
}

export const signInWithFacebook=()=>{
    signInWithPopup(auth,provide).then((result)=>{
        console.log(result)
    }).catch((error)=>{
        console.log(error)
    });
}