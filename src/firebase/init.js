import firebase from 'firebase/app';
import 'firebase/database'
// import firestore from 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDj2LVW8x4Lwt99Zz0pyK5GH-Ag8S1kmB8",
    authDomain: "keen-communications.firebaseapp.com",
    projectId: "keen-communications",
    storageBucket: "keen-communications.appspot.com",
    messagingSenderId: "1018941183074",
    appId: "1:1018941183074:web:09eae0baaad73b1d16ed3b",
    measurementId: "G-L1XJRVQEVV"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();