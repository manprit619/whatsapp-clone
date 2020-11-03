// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyfonnj0VHWm42tGWicc3STLGBYN5Q2jM",
  authDomain: "whatsapp-clone-15e01.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-15e01.firebaseio.com",
  projectId: "whatsapp-clone-15e01",
  storageBucket: "whatsapp-clone-15e01.appspot.com",
  messagingSenderId: "75788265794",
  appId: "1:75788265794:web:934d34ed3b50254940c0db",
  measurementId: "G-T5K4H0CV0S"
};
  const firebaseApp = firebase.initializeApp (firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export { auth, provider};
  export default db;