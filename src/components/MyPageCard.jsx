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
        const defaultContent = "Roomtopia suggest new room to you!" + 
                                "\nLocation: " + props.Location + 
                                "\nCost: " + props.CostperDay + 
                                "\nTerm: " + props.From + " ~ " + props.To + 
                                "\nAdd your comment here!";
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
                <Card.Text>
                    <Link to={{pathname: '/ItemInfo',state: {p : "passed"}}}>
                        View detail
                    </Link>
                </Card.Text>
            </Card.Body>
            <ListGroupItem>
                {props.Confirm ? <b>Contract Complete!<br/></b> : <b>Contract in Progress<br/></b>}
                {props.Confirm ? 
                <Button ><Link to='/RequestM' style={{ textDecoration: 'none', color: 'white'}}>Show Contractor Info</Link></Button>:
                <Button ><Link to='/RequestM' style={{ textDecoration: 'none', color: 'white'}}> Check Request&nbsp;<Badge pill variant="danger">{props.requestNum}</Badge></Link></Button>}
            </ListGroupItem>
            <ListGroupItem>
                <>
                <div style={{display: 'flex'}}>
                    <Button variant="primary" onClick={handleShow}>
                    Advertise Your Room!
                    </Button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Email Advertisement</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form.Label><b>Select target community</b></Form.Label>
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
                            <Form.Check inline type="checkbox" label="KAIST" id="kaist" onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="Postec" id="postec" onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="ChungNam Univ." id="chungnam" onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="Seoul Univ." id="seoul" onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="Korea Univ." id="korea" onChange={updateChecking}/>
                            <Form.Check inline type="checkbox" label="Daejon Cyber Univ." id="daejon" onChange={updateChecking}/>
                        </Form.Group> 
                        <Form.Label><b>Select target preference</b></Form.Label>
                        <OverlayTrigger
                            placement="right"
                            overlay={
                            <Tooltip>
                                If you don't check, it's considered as 'don't care'
                            </Tooltip>
                            }>
                            <Button variant="link" size="sm">(?)</Button>
                        </OverlayTrigger>{' '}
                        <Form.Group>
                            Term<br/>
                            <Form.Check inline type="checkbox" label="~1 week"/>
                            <Form.Check inline type="checkbox" label="~2 weeks"/>
                            <Form.Check inline type="checkbox" label="~3 weeks"/>
                            <Form.Check inline type="checkbox" label="3~ weeks"/>
                        </Form.Group> 
                        <Form.Group>
                            Allow smoking<br/>
                            <Form.Check inline type="checkbox" label="Yes"/>
                            <Form.Check inline type="checkbox" label="No"/>
                        </Form.Group> 
                        <Form.Group>
                            Gender<br/>
                            <Form.Check inline type="checkbox" label="Male"/>
                            <Form.Check inline type="checkbox" label="Female"/>
                        </Form.Group> 
                        <Form.Group>
                            <Form.Label><b>Please fill in the promotional content</b></Form.Label>
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
            </ListGroupItem>
            </Card>

  );
};

export default MyPageCard;
