import React, {useState} from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import firebase from '../components/Firestore';
import MyPageCard from "../components/MyPageCard";


const MyPage = props => {
  const [requestNum, setRequestNum] = useState(0);
  const [roomName, setRoomName] = useState('');
  const [explanation, setExplanation] = useState('');
  const [cost, setCost] = useState(0);
  const [term, setTerm] = useState('');

  const db = firebase.firestore();
  const userDoc = db.collection('userID').doc('user2');

  userDoc.get().then(function(doc){
      const myRegister = doc.data().MyRegister;
      const requests = myRegister.request;
      setRequestNum(requests.length);
      setRoomName(myRegister.roomName);
      setExplanation(myRegister.explanation);
      setCost(myRegister.cost);
      setTerm(myRegister.term);
  });

  return (
    <>
      <Header/>
      <Main>
        <div>This is MyPage</div>
        <MyPageCard roomName={roomName} explanation={explanation} term={term} cost={cost} requestNum={requestNum} />
      </Main>
    </>
  );
};

export default MyPage;
