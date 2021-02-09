import firebase from 'firebase'

var firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyB8-r7O_Jpl3vUmeFGSpiR8OwUfBduDtfw",
        authDomain: "mr-wholeseller.firebaseapp.com",
        databaseURL: "https://mr-wholeseller.firebaseio.com",
        projectId: "mr-wholeseller",
        storageBucket: "mr-wholeseller.appspot.com",
        messagingSenderId: "421762229799",
        appId: "1:421762229799:web:b5dce721c14d256ef71002",
        measurementId: "G-T6PGY0WTRQ"
});

var db = firebaseApp.firestore();

export {db};