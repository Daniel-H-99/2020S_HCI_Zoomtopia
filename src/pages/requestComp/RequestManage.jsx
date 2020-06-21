import React, {useState} from 'react';
import firebase from '../../components/Firestore';
import SubManage from "./SubManage";

const writeData2 = (userID, reqidx) => {
  return firebase.firestore().collection('userID').doc(userID).collection('Request[0]').update({
    reqidx: {
      Confirm: true

    }
  });
}
const writeData1 = (userID) => {
  return firebase.firestore().collection('userID').doc(userID).update({
      'MyRegister.Confirm': true
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
    let indexlist = [];
    
    writeData1(props.user);
    // for(let name in ranges){
    //   for (let i =0; i<this.requestsNum; i++) {
    //     if(ranges[name]==this.requests[i].id){this.requests[i].Confirm = true;}
    //     indexlist = indexlist.concat(i);
    //   };
    // }
    // for(let j = 0; j<indexlist.length;j++){
    //   writeData2('user2', j)
    // }
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
