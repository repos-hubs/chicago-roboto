import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDoRbOjqO7Qqju40SQoyckX0lLhGjxRmU0",
    authDomain: "devfest-bbd5b.firebaseapp.com",
    databaseURL: "https://devfest-bbd5b.firebaseio.com",
    projectId: "devfest-bbd5b",
    storageBucket: "devfest-bbd5b.appspot.com",
    messagingSenderId: "227521769212"
  };
firebase.initializeApp(config)

export const db = firebase.database().ref().child('events').child('devfest-jhb')
export const auth = firebase.auth()
