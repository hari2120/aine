
import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB3CvAckihcNRyuoZlGzPteLapzT2vSJp0",
  authDomain: "aine-448a9.firebaseapp.com",
  projectId: "aine-448a9",
  storageBucket: "aine-448a9.appspot.com",
  messagingSenderId: "1077215354922",
  appId: "1:1077215354922:web:495f4c910c7ebe0c016353",
  measurementId: "G-4STNXK1ZQX"

});
const db = firebaseApp.firestore();
const auth = firebase.auth()


export  { db, auth };
