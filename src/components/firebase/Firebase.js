//https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyB8p6fqSIGyN70KfYcs2OBD0SJJhJHGk08",
    authDomain: "to-do-1ffb7.firebaseapp.com",
    databaseURL: "https://to-do-1ffb7.firebaseio.com",
    projectId: "to-do-1ffb7",
    storageBucket: "",
    messagingSenderId: "727781006460"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth
};