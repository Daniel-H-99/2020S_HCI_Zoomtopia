import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {Card, Badge, ListGroup, ListGroupItem, Button, Modal, FormControl, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';

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
    const handleFail = () => {
        alert("Please select at least 1 domain!");
    }

    const [checking, setChecking] = useState(0);
    const updateChecking = (e) => {
      if (e.target.checked) {
        console.log(e.target.id + " check! " +checking);
        setChecking(checking + 1);
      } else {
        console.log(e.target.id + " uncheck! " +checking);
        setChecking(checking - 1);
      }
      console.log("after" + checking);
    }


  const photoURL = 'https://img.youtube.com/vi/'+props.VideoID+'/0.jpg';
  return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photoURL}/>
            <Card.Body>
                <Card.Title>{props.RoomName}</Card.Title>
                <Card.Text>
                {props.Explanation}
                </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{props.From} ~ {props.To}</ListGroupItem>
                <ListGroupItem>{props.CostperDay} Won / Day</ListGroupItem>
                <ListGroupItem>                
                    <Link to={{pathname: '/ItemInfo',state: {p : "passed"}}} style={{ marginRight: 30 }}>
                    View detail
                    </Link>
                </ListGroupItem>
                <ListGroupItem>
                    {props.Confirm ? <b>Contract Complete!<br/></b> : <b>Contract in Progress<br/></b>}
                    {props.Confirm ? 
                    <Link to='/RequestM'>Show Contractor Info</Link> :
                    <Link to='/RequestM'> Check Request<Badge variant="light">{props.requestNum}</Badge></Link>}
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button variant="primary" onClick={handleShow}>
                    Advertise Your Room!
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email Advertisement</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label>Select target community</Form.Label>
                        <OverlayTrigger
                            placement="right"
                            overlay={
                            <Tooltip>
                                Roomtopia will send email to room seekers with specific domain you select!
                            </Tooltip>
                            }>
                            <Button variant="link" size="sm">(?)</Button>
                        </OverlayTrigger>{' '}
                        <Form.Group controlId="domainCheckBox">
                            <Form.Check inline type="checkbox" label="KAIST"  onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="Postec"  onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="ChungNam Univ."  onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="Seoul Univ."  onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="Korea Univ."  onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="Daejon Cyber Univ."  onChange={updateChecking}/>
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label>Please fill in the promotional content</Form.Label>
                            <OverlayTrigger
                            placement="right"
                            overlay={
                            <Tooltip>
                                Below content is auto-generated. You can edit email content
                            </Tooltip>
                            }>
                            <Button variant="link" size="sm">(?)</Button>
                            </OverlayTrigger>{' '}
                            <FormControl defaultValue="[Roomtopia] Check new room!"/>
                            <FormControl as="textarea" rows="5" defaultValue={defaultText}/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        {checking == 0 ? 
                            <Button variant="primary" onClick={handleFail}>
                                Send
                            </Button>
                            :
                            <Button variant="primary" onClick={handleSuccess}>
                                Send
                            </Button>
                        }
                    </Modal.Footer>
                </Modal>
                </>
            </Card.Body>
            </Card>

  );
};

export default MyPageCard;
