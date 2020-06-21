import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
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
  const [isRegi, setIsRegi] = useState(false);

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
        setIsRegi(true);

        const rawUrl = myRegister.IntroVideo;
        setVideoID(rawUrl.split("v=")[1].split('&')[0]);
      }
  });

  return (
    <>
      <br/><h2 style={{ fontFamily: 'Ubuntu, sans-serif'}}>My Page</h2>
      <hr/><br/>
      {isRegi ? 
        <MyPageCard RoomName={roomName} Explanation={explanation} From={from} To={to} CostperDay={cost} requestNum={requestNum} Location={location} Confirm={confirm} VideoID={videoID}/>
      :
      <Link to={{pathname: '/RegisterRoom'}}>
      <Button style={{marginRight: 30, float: 'right'}} variant="primary">+ Register Offer</Button>
      </Link>
      }
      <br/><br/>
    </>
  );
};

export default MyPage;
