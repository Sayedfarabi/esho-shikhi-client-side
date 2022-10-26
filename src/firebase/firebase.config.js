// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBhJ3xBUSmg2tURWukNLCtRhT-6RhM8_VQ",
    authDomain: "esho-shikhi.firebaseapp.com",
    projectId: "esho-shikhi",
    storageBucket: "esho-shikhi.appspot.com",
    messagingSenderId: "768176204009",
    appId: "1:768176204009:web:10feef3fabc4a0168b2878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;