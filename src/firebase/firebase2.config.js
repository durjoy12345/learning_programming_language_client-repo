// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDK_TQ7edhZ4wsG_YSFO-FIka9H6rD8FKE",
    authDomain: "learning-programming-language.firebaseapp.com",
    projectId: "learning-programming-language",
    storageBucket: "learning-programming-language.appspot.com",
    messagingSenderId: "1095360095772",
    appId: "1:1095360095772:web:6f807e5a183031f86521d9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;