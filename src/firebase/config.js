import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJ-B4qZBKMn2c8ODzGbTKpZjMPGUUMWvA",
    authDomain: "miniblog-6fc93.firebaseapp.com",
    projectId: "miniblog-6fc93",
    storageBucket: "miniblog-6fc93.firebasestorage.app",
    messagingSenderId: "278110517184",
    appId: "1:278110517184:web:7e9d5ad675d8bff953fa25",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
