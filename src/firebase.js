// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyA3l4P3Gje7RgwRLTfMm0dn0jRk-xHNNAQ",
	authDomain: "fb-clone-1c577.firebaseapp.com",
	projectId: "fb-clone-1c577",
	storageBucket: "fb-clone-1c577.appspot.com",
	messagingSenderId: "665985351980",
	appId: "1:665985351980:web:56183f7078fb318fdd2c89",
	measurementId: "G-N78LP0Z55N",
};
// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth(); //this will help in sign in or login
// const provider = new firebase.auth.GoogleAuthProvider();

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
