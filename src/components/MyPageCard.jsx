import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Card, Badge, ListGroup, ListGroupItem, Button, Modal, FormControl, Form} from 'react-bootstrap';

function MyPageCard(props) {
    const [show, setShow] = useState(false);
    const [defaultText, setDefaultText] = useState('');
    const handleClose = () => setShow(false);
    const handleSuccess = () => {
        setShow(false);
        alert("Email has been sent successfully!");
    }
    const handleShow = () => {
        const defaultContent = "Location: " + props.Location + "\nCost: " + props.CostperDay + "\nTerm: " + props.From + " ~ " + props.To ;
        setDefaultText(defaultContent);
        setShow(true);
    }

  return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={require('../images/Sample.png')} />
            <Card.Body>
                <Card.Title>{props.RoomName}</Card.Title>
                <Card.Text>
                {props.Explanation}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.From} ~ {props.To}</ListGroupItem>
                <ListGroupItem>{props.CostperDay} Won / Day</ListGroupItem>
                <ListGroupItem>{props.Confirm ? <b>Contract Complete!</b> : <b>Contract in Progress</b>}</ListGroupItem>
            </ListGroup>
            <Card.Body>
                <>
                <Button variant="primary" onClick={handleShow}>
                    Advertise Your Room!
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email Advertisement</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Select target community</Form.Label>
                        <Form.Group controlId="domainCheckBox">
                            <Form.Check inline type="checkbox" label="KAIST" />
                            <Form.Check inline type="checkbox" label="CMU" />
                            <Form.Check inline type="checkbox" label="MIT" />
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Please fill in the promotional content</Form.Label>
                            <FormControl defaultValue="[Roomtopia] Check new room!"/>
                            <FormControl as="textarea" rows="5" defaultValue={defaultText}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleSuccess}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>
                </>
            </Card.Body>
            <Card.Body>
                <Link to={{pathname: '/ItemInfo',state: {p : "passed"}}} style={{ marginRight: 10 }}>
                    View detail
                </Link>
                {props.Confirm ? <Link to='/RequestM'>Show Contractor Info</Link> :<Link to='/RequestM'> Check Request<Badge variant="light">{props.requestNum}</Badge></Link>}
            </Card.Body>
            </Card>

  );
};

export default MyPageCard;
