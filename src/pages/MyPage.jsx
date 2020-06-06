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
  const [location, setLocation] = useState('');

  const db = firebase.firestore();
  const userDoc = db.collection('userID').doc('user4');

  userDoc.get().then(function(doc){
      const myRegister = doc.data().MyRegister;
      const requests = doc.data().Request;
      setRequestNum(requests.length);
      setRoomName(myRegister.roomName);
      setExplanation(myRegister.explanation);
      setCost(myRegister.cost);
      setTerm(myRegister.term);
      setLocation(myRegister.location);
  });

  return (
    <>
      <Header/>
      <Main>
        <div>This is MyPage</div>
        <MyPageCard roomName={roomName} explanation={explanation} term={term} cost={cost} requestNum={requestNum} location={location}/>
      </Main>
    </>
  );
};

export default MyPage;
