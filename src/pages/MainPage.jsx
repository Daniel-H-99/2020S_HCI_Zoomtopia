import React, {useRef, useState} from 'react';
import {Button, Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import firebase from '../components/Firestore';
const db = firebase.firestore();
const findRoomsInDB = (callback) => {
  const query = db.collection('userID').limit(10);
  query.get().then(snapshot => {
    const rooms = [];
    snapshot.forEach(doc => {
      if (doc.data().MyRegister != null){
        rooms.push(doc.data().MyRegister);       
      }
    })
    callback(rooms);
  })  
}
const queryParser = (url) => {
  const params = url.split('?')[1].split('&');
  const result = {};
  params.map((item) => {
    const [param, value] = item.split('=');
    result[param] = value;
  })
  return result;
} 
const MainPage = props => {
  const {authed, user} = props;
  const deckRef = useRef();
  const [cards, setCards] = useState(<></>);
  const findCallBack = (rooms) => {
    setCards (
      <>
        {rooms.map(room => {
          const photoURL = room.IntroVideo?'https://img.youtube.com/vi/'+queryParser(room.IntroVideo).v+'/0.jpg' : 'https://img.youtube.com/vi/f2V-yOVKDVU/0.jpg';
          return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={photoURL} />
          <Card.Body style={{height: "5rem"}}>
            <Card.Title style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{room.RoomName}</Card.Title>
            <Card.Text style={{whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
              {room.Explanation}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{room.Location}</ListGroupItem>
            <ListGroupItem>{room.RoomSize + '  pyeong'}</ListGroupItem>
            <ListGroupItem>{room.From} ~ {room.To}</ListGroupItem>
          </ListGroup> 
          <Card.Body>           
            <Button variant="primary">See Detail</Button>
          </Card.Body>
        </Card>
        )})}
      </>)
  }
  findRoomsInDB(findCallBack);
  return (
    <>
        <h3>What kind of town, what kind of room do you want to live in?</h3>
        <h3>Offer or Discover your Short-Term Rental House Quickly</h3><hr/><br/><br/><br/>
        <div style={{width: '100%', margin: 'auto', paddingBottom: 10}}>
        <b style={{fontSize: '25px'}}>CURRENT OFFERS</b> 
        <Link to={{
        	pathname: '/RegisterRoom',
        	state: {
        		p : "passed"
        	}
        }}>
        {authed?<Button style={{float: 'right'}} variant="primary">+ Register Offer</Button>:null}
        </Link>
        </div>
        <CardDeck style={{width: '100%'}}>
          {cards}
        </CardDeck>
    </>
  );
};

export default MainPage;
