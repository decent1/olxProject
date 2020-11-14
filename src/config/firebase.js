import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';


var firebaseConfig = {
    apiKey: "AIzaSyBUS7LdEVsVhEDAB0fiXOTnf3E6ww8njKI",
    authDomain: "olxproject-9217c.firebaseapp.com",
    databaseURL: "https://olxproject-9217c.firebaseio.com",
    projectId: "olxproject-9217c",
    storageBucket: "olxproject-9217c.appspot.com",
    messagingSenderId: "1007592930139",
    appId: "1:1007592930139:web:240f0da418e0c04d37387e",
    measurementId: "G-8FXX6JG0N2"
  };
  firebase.initializeApp(firebaseConfig);

  export default firebase;