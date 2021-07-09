import app from 'firebase/app';
import 'firebase/database';

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

const firebase = app.initializeApp(config);

var db = firebase.database();

export default {
    firebase,
    db
}