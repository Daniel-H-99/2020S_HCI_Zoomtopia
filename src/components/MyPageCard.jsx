import React from 'react';
import {Card, Badge, ListGroup, ListGroupItem} from 'react-bootstrap';

function MyPageCard(props) {
  return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../images/Sample.png')} />
            <Card.Body>
                <Card.Title>{props.roomName}</Card.Title>
                <Card.Text>
                {props.explanation}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.term}</ListGroupItem>
                <ListGroupItem>{props.cost}</ListGroupItem>
                <ListGroupItem>Contract Status</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href="/ItemInfo">View detail</Card.Link>
                <Card.Link href="/RequestM">
                  Check Request<Badge variant="light">{props.requestNum}</Badge>
                </Card.Link>
            </Card.Body>
            </Card>

  );
};

export default MyPageCard;
