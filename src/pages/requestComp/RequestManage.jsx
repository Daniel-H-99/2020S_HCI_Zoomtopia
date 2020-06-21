import React, {useState} from 'react';
import firebase from '../../components/Firestore';
import SubManage from "./SubManage";

const writeData1 = (userID) => {
  return firebase.firestore().collection('userID').doc(userID).update({
    'MyRegister.Confirm': true
  });
}
const writeData2 = (userID, ranges) => {
  const db = firebase.firestore();
  const userDoc = db.collection('userID').doc(userID);
  userDoc.get().then(function(doc){
    const requests = doc.data().Request;
    let confirmedReqs = [];
    for(let name in ranges){
        for (let i =0; i<requests.length; i++) {
        if(ranges[name].name==requests[i].email){
          confirmedReqs = confirmedReqs.concat({
              Confirm: true,
              From: requests[i].From,
              To: requests[i].To,
              email: requests[i].email,
              id: requests[i].id,
              phone: requests[i].phone
            });
        }
      }
    }
    console.log(confirmedReqs);
    return firebase.firestore().collection('userID').doc(userID).update({
      'Request': confirmedReqs
    });
  });
}

const RequestManage = props => {
  const [requestNum, setRequestNum] = useState(0);
  const [roomName, setRoomName] = useState('');
  const [From, setFrom] = useState('');
  const [To, setTo] = useState('');
  const [confirm, setConfirm] = useState(false);
  const [reQuest, setRequest] = useState('')

  const db = firebase.firestore();
  const userDoc = db.collection('userID').doc(props.user);

  userDoc.get().then(function(doc){
      const myRegister = doc.data().MyRegister;
      const requests = doc.data().Request;
      setRequestNum(requests.length);
      setRoomName(myRegister.RoomName);
      setFrom(myRegister.From);
      setTo(myRegister.To);
      setConfirm(myRegister.Confirm);
      setRequest(requests);
  });
  
  function handleConfirming(ranges){

    if(ranges.length==0){
      alert("No requests selected!");
      return;
    }
    
    writeData1(props.user);
    
    writeData2(props.user, ranges);

    alert("Confirm succeed!");
  }

  return (
    <>
      <SubManage RoomName={roomName} From={From} To={To}
       requestNum={requestNum} Confirm={confirm} reqDBase ={reQuest} handleConfirmFinal={handleConfirming} />
    </>
  );
};

export default RequestManage;
//reqDBase ={reQuest}
