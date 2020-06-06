import React, {useState} from 'react';
import {Card, Badge, ListGroup, ListGroupItem, Button, Modal, InputGroup, FormControl, Form} from 'react-bootstrap';

function MyPageCard(props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                <>
                <Button variant="primary" onClick={handleShow}>
                    Advertise Your Room!
                </Button>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email Advertisement</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <Form.Group controlId="domainCheckBox">
                        <Form.Check type="checkbox" label="KAIST" />
                        <Form.Check type="checkbox" label="CMU" />
                        <Form.Check type="checkbox" label="MIT" />
                    </Form.Group> 
                    <InputGroup>
                        <FormControl as="textarea" aria-label="With textarea" />
                    </InputGroup>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>
                </>
            </Card.Body>
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
