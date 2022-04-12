// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCV6rf7aQxXGDcvqARJZiTMBGPG9nRgkKU",
    authDomain: "ema-john-ecommerce-simpl-833ef.firebaseapp.com",
    projectId: "ema-john-ecommerce-simpl-833ef",
    storageBucket: "ema-john-ecommerce-simpl-833ef.appspot.com",
    messagingSenderId: "45026444461",
    appId: "1:45026444461:web:6a03a7acb41d8fcc8fb224"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;