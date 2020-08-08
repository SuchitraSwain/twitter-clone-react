import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCA3fKb0XYXkHJHmprXd6tus_HLDsRzyoo",
  authDomain: "twitter-clone-7ba6d.firebaseapp.com",
  databaseURL: "https://twitter-clone-7ba6d.firebaseio.com",
  projectId: "twitter-clone-7ba6d",
  storageBucket: "twitter-clone-7ba6d.appspot.com",
  messagingSenderId: "1009294126902",
  appId: "1:1009294126902:web:fe84e7603b75c61e068d97",
  measurementId: "G-1SWW4Z8L6S",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
console.log(db);

export default db;
