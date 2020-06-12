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

  /*
 var firebaseConfig = {
    apiKey: "AIzaSyDgKzu9E6pcLj6ISmFilrvjTd2T1FCZ9ks",
    authDomain: "roomtopiadb.firebaseapp.com",
    databaseURL: "https://roomtopiadb.firebaseio.com",
    projectId: "roomtopiadb",
    storageBucket: "roomtopiadb.appspot.com",
    messagingSenderId: "305156130450",
    appId: "1:305156130450:web:330cc79b83ffb86568484b",
    measurementId: "G-3GH71R759T"
  };
  */
  /*
  firebaseConfig = {
    apiKey: "AIzaSyAsKY0ub3iT4ZNlHvLEK9qkJrLvyHEV8AE",
    authDomain: "roomtopiadatabase.firebaseapp.com",
    databaseURL: "https://roomtopiadatabase.firebaseio.com",
    projectId: "roomtopiadatabase",
    storageBucket: "roomtopiadatabase.appspot.com",
    messagingSenderId: "1046363796649",
    appId: "1:1046363796649:web:45e59565f639ad3951e5b8",
    measurementId: "G-GG8T4BLJRS"
  };
  */
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