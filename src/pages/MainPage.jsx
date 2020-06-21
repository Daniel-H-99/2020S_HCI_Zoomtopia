import React, {useRef, useState} from 'react';
import "../App.css"
import {Button, Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import firebase from '../components/Firestore';
const db = firebase.firestore();
const findRoomsInDB = (callback) => {
  const query = db.collection('userID');
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
  const params = url.split('?')[1]?url.split('?')[1].split('&'):[]
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
  const [refreshed, setRefresh] = useState(false)
  const findCallBack = (rooms) => {
    rooms= rooms.slice(0, 3)
    setCards (
      <>
        {rooms.map(room => {
          const photoURL = room.IntroVideo?'https://img.youtube.com/vi/'+queryParser(room.IntroVideo).v+'/0.jpg' : 'https://img.youtube.com/vi/f2V-yOVKDVU/0.jpg';
          return (
          <Card style={{ width: '18rem', height: '30rem', padding: 0}}>
          <Card.Img variant="top" src={photoURL} />
          <Card.Body style={{height: "6rem"}}>
            <Card.Title style={{ fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{room.RoomName}</Card.Title>
            <Card.Text style={{ fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
              {room.Explanation}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{room.Location}</ListGroupItem>
            <ListGroupItem>{room.RoomSize + '  m^2'}</ListGroupItem>
            <ListGroupItem>{room.From} ~ {room.To}</ListGroupItem>
          </ListGroup> 
          <Card.Body style={{padding: 0, margin: 0}} >
            <table style={{width: '100%', margin: 0, padding: 0}}>
              <tr>
                <th style={{width: '50%'}}>
                  <Button variant="secondary" style={{width: '96%', margin: '2%', verticalAlign: 'middle'}}>{" See Detail "}</Button>
                </th>
                <th style={{width: '50%'}}>
                  <Button variant="secondary" style={{width: '96%', margin: '2%', verticalAlign: 'middle'}}>Contact</Button>
                </th>
              </tr>
            </table>
          </Card.Body>
        </Card>
        )})}
      </>)
  }
  if (!refreshed){
    findRoomsInDB(findCallBack);
    setRefresh(true)
  }
  return (
    <>
      <div style={{marginTop: 100}}>
        <h3 style={{fontFamily: 'Montserrat, sans-serif', textAlign: "center"}}>What kind of town, what kind of room do you want to live in?</h3>
        <h3 style={{fontFamily: 'Montserrat, sans-serif', textAlign: "center"}}>Offer or Discover your Short-Term Rental House Quickly</h3><hr/><br/><br/><br/>
      </div>
        <div style={{width: '100%', margin: 'auto', paddingBottom: 10}}>
        <b style={{fontSize: '25px', fontFamily: 'Ubuntu, sans-serif'}}>CURRENT OFFERS</b> 
        <Link to={{
        	pathname: '/RegisterRoom',
        	state: {
        		p : "passed"
        	}
        }}>
        {authed?<Button style={{marginRight: 30, float: 'right'}} variant="primary">+ Register Offer</Button>:null}
        </Link>
        </div>
        <CardDeck style={{width: '100%'}}>
          {cards}
        </CardDeck>
    </>
  );
};

export default MainPage;
