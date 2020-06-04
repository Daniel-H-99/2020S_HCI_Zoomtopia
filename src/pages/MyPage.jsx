import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import firebase from '../components/Firestore';

const MyPage = props => {
  const db = firebase.firestore();
//   db.collection("userID").add({
//       field1: "prop1",
//       field2: "prop2"
//   });
  return (
    <>
      <Header/>
      <Main>
        <div>This is MyPage</div>
        <div>Testing place for firestore</div>
      </Main>
    </>
  );
};

export default MyPage;
