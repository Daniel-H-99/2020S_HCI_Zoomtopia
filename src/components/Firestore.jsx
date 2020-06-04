import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArkTUMpYK6h2rhMrHRzkH_-ftlKE2ygA8",
    authDomain: "fir-hci-zoomtopia.firebaseapp.com",
    databaseURL: "https://fir-hci-zoomtopia.firebaseio.com",
    projectId: "fir-hci-zoomtopia",
    storageBucket: "fir-hci-zoomtopia.appspot.com",
    messagingSenderId: "821035151780",
    appId: "1:821035151780:web:bef50d7fb2c3665b309131"
  };
firebase.initializeApp(firebaseConfig);

export default firebase;


/*
How to use firestore:

1. import firebase from this jsx file
path will be different depends on position where you want to use firebase 
(ex. import firebase from '../components/Firestore';)

2. init db with firebase.firestore()
(ex. const db = firebase.firestore();)

3. you can check data from follow url:
https://console.firebase.google.com/project/fir-hci-zoomtopia/database/firestore

4. 영어로 설명문 써놓으니 있어보인다!
*/