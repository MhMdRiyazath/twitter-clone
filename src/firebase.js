// Change the import statements like this
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC2UUoMSJuvf9_v8VSjKT2j_TpgzuNtAiM",
  authDomain: "twitter-clone-886c2.firebaseapp.com",
  projectId: "twitter-clone-886c2",
  storageBucket: "twitter-clone-886c2.appspot.com",
  messagingSenderId: "533856342510",
  appId: "1:533856342510:web:eb5c2c930f661439313eff",
  measurementId: "G-7JSB3KT3NK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;