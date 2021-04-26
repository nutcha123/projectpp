import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyCYQUbTj1TKHmUkZByzDZsp3G7QDzS0hAI",
    authDomain: "react-auth-9a75a.firebaseapp.com",
    projectId: "react-auth-9a75a",
    storageBucket: "react-auth-9a75a.appspot.com",
    messagingSenderId: "722252916016",
    appId: "1:722252916016:web:256c82b6cd2885dfddd4f5",
    measurementId: "G-JST4TGPZNT"
  });

  export default firebaseConfig;