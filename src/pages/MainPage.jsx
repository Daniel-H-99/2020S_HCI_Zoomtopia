import React, {useRef, useState} from 'react';
import Header from '../components/Header';
import {Button, Card, CardDeck, ListGroup, ListGroupItem} from 'react-bootstrap';
import Main from '../components/Main';
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
          const photoURL = room.IntroVideo?queryParser(room.IntroVideo).v : '../images/Sample.png';
          return (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={require('../images/Sample.png')} />
          <Card.Body>
            <Card.Title>{room.RoomName}</Card.Title>
            <Card.Text>
              {room.Explanation}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>{room.Location}</ListGroupItem>
            <ListGroupItem>{room.RoomSize + '  pyeong'}</ListGroupItem>
            <ListGroupItem>{room.From}</ListGroupItem>
          </ListGroup> 
          <Card.Body>           
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        )})}
      </>)
  }
  findRoomsInDB(findCallBack);
  return (
    <>
      <Header {...props} />
      <Main>
        <h3>Hello! This is Roomtopia. Offer or Discover your Short-Term Rental House Quickly.</h3><br/><br/><br/>
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
        <CardDeck style={{width: '50%'}}>
          {cards}
        </CardDeck>
      </Main>
    </>
  );
};

export default MainPage;
