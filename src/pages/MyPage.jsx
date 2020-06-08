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
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [location, setLocation] = useState('');
  const [videoID, setVideoID] = useState('');
  const [confirm, setConfirm] = useState(false);

  const db = firebase.firestore();
  const userDoc = db.collection('userID').doc(props.user);

  userDoc.get().then(function(doc){
      const myRegister = doc.data().MyRegister;
      const requests = doc.data().Request;
      if (requests !== undefined){
        setRequestNum(requests.length);
      }
      if (myRegister !== undefined) {
        setRoomName(myRegister.RoomName);
        setExplanation(myRegister.Explanation);
        setCost(myRegister.CostperDay);
        setFrom(myRegister.From);
        setTo(myRegister.To)
        setLocation(myRegister.Location);
        setConfirm(myRegister.Confirm);

        const rawUrl = myRegister.IntroVideo;
        setVideoID(rawUrl.split("v=")[1].split('&')[0]);
      }
  });

  return (
    <>
      <br/><h2 style={{ fontFamily: 'Ubuntu, sans-serif'}}>My Page</h2>
      <hr/><br/>
      <MyPageCard RoomName={roomName} Explanation={explanation} From={from} To={to} CostperDay={cost} requestNum={requestNum} Location={location} Confirm={confirm} VideoID={videoID}/>
    </>
  );
};

export default MyPage;
