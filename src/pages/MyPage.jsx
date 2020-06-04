import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import firebase from '../components/Firestore';
import {Card, CardDeck, Badge, ListGroup, ListGroupItem} from 'react-bootstrap';

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
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../images/Sample.png')} />
            <Card.Body>
                <Card.Title>Room Name</Card.Title>
                <Card.Text>
                Description Text Here
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>Period</ListGroupItem>
                <ListGroupItem>Cost</ListGroupItem>
                <ListGroupItem>Contract Status</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="#">View detail</Card.Link>
                <Card.Link href="#">
                    Check Request<Badge variant="light">4</Badge>
                </Card.Link>
            </Card.Body>
            </Card>
      </Main>
    </>
  );
};

export default MyPage;
