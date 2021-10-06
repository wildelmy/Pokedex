import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyBadwT5AEZ6yqZ0cHWuFNnOgsEMrWqtht8",
    authDomain: "app-pokedex-8692a.firebaseapp.com",
    projectId: "app-pokedex-8692a",
    storageBucket: "app-pokedex-8692a.appspot.com",
    messagingSenderId: "568477130297",
    appId: "1:568477130297:web:d76ad99d18e5e00c8737e8"
};

const app= initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = getFirestore(app)