// Import the functions you need from the SDKs you need
import {initializeApp, getApp, getApps} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDlhVX96g4fXa8W1TVb40VG3602JMtByZc",
    authDomain: "netfilx-clone-e7178.firebaseapp.com",
    projectId: "netfilx-clone-e7178",
    storageBucket: "netfilx-clone-e7178.appspot.com",
    messagingSenderId: "248114042729",
    appId: "1:248114042729:web:473f67cf71769d4fa08ff8",
    measurementId: "G-ME7KSNPYXR"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export {auth, db}