// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6ozmrC7CitzXRCvenL3omHyL1qUrQzlY",
    authDomain: "miniblog-60f0b.firebaseapp.com",
    projectId: "miniblog-60f0b",
    storageBucket: "miniblog-60f0b.appspot.com",
    messagingSenderId: "863480192195",
    appId: "1:863480192195:web:62465ba94d4c958f179676",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
