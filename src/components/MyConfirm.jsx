import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './MyConfirm.scss'
import {Card, ListGroupItem, Button, Modal, FormControl, Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function MyConfirm(props) {
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


    const generateCard = (requests) => {
        return(
            requests.map((variant, idx) => (
            <Card
                key={idx}
                style={{ width: '100%' }}
                className="mb-2"
            >
                <Card.Header><CheckCircleIcon color='primary' /> {`Request ${idx+1}`}</Card.Header>
                <Card.Body>
            <Card.Title> email: {variant.email} </Card.Title>
                <Card.Text>
                    {`ID: ${variant.id}`}<br/>
                    {`phone: ${variant.phone}`}
                    <br/>
                    {`term: ${variant.From} ~ ${variant.To}`}
                </Card.Text>
                </Card.Body>
            </Card>
            ))
        )
    }

  const photoURL = 'https://img.youtube.com/vi/'+props.VideoID+'/0.jpg';
  return (<>
    <div className = 'mywrapper'>
        <div className = 'box1'>
            <Card  style={{ width: '100%' }} >
                <Card.Img variant="top" src={photoURL}/>
                <Card.Body>
                    <Card.Title>{props.RoomName}</Card.Title>
                    <Card.Text style={{ fontWeight: 400, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>
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
                </ListGroupItem>
            </Card>   
        </div>
        <div className = 'box2'>
            {generateCard(props.reQuest)}
        </div>
    </div>
    <br/>
    <div>
        <Button ><Link to='/MyPage'  style={{ textDecoration: 'none', color: 'white'}}>Back</Link></Button>
    </div>
    </>
  );
};

export default MyConfirm;
//<Card.Img variant="top" src={photoURL}/>

/*
<Card style={{ width: '100%' }}>
        <Card.Header as = 'p'>request</Card.Header>
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
    </Card>
*/