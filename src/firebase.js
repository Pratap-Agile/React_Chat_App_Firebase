import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDxeWOAkY7zwckR36zFdpyJmtxzfd37cQ8",
  authDomain: "firechat-989.firebaseapp.com",
  projectId: "firechat-989",
  storageBucket: "firechat-989.appspot.com",
  messagingSenderId: "828054785021",
  appId: "1:828054785021:web:39aa5c9470b8e4133c6794",
  measurementId: "G-SV5Y79GMVC",
});

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
