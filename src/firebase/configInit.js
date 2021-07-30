import app from 'firebase/app';
import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDPhnOyCUo_SeRngvoj6nojVXKexMnNWFo",
    authDomain: "keen-comm.firebaseapp.com",
    databaseURL: "https://keen-comm-default-rtdb.firebaseio.com",
    projectId: "keen-comm",
    storageBucket: "keen-comm.appspot.com",
    messagingSenderId: "263366845035",
    appId: "1:263366845035:web:e67fce3621eaf6edffc72e",
    measurementId: "G-MHTK3H8M3R"
};

app.initializeApp(config);

export const db = firebase.database(app);