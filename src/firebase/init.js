import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyD0_FXLDF2O0lccUS4PgHOkJOGHq_OMm1o",
    authDomain: "kc-live-chat.firebaseapp.com",
    projectId: "kc-live-chat",
    storageBucket: "kc-live-chat.appspot.com",
    messagingSenderId: "41737494867",
    appId: "1:41737494867:web:7598c3b1f08784da6a81a6",
    measurementId: "G-J4NY8D29LM"
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();