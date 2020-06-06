import React, { useState, Component } from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import YoutubeEmbeded from '../components/YouTubeEmbeded';
import firebase from '../components/Firestore';

function ItemInfoForm(props) {
    const [roomName, setRoomName] = useState('');
    const [explanation, setExplanation] = useState('');
    const [cost, setCost] = useState(0);
    const [term, setTerm] = useState('');
    const [roomStructure, setRoomStructure] = useState('');
    const [roomSize, setRoomSize] = useState(0);
    const [location, setLocation] = useState('');


    //TODO: props에서 어떤 user의 data를 받아올지 정하기
    //현재는 그냥 user2 정보 가져옴
    const db = firebase.firestore();
    const userDoc = db.collection('userID').doc(props.userID);

    userDoc.get().then(function(doc){
        const myRegister = doc.data().MyRegister;
        setRoomName(myRegister.roomName);
        setExplanation(myRegister.explanation);
        setCost(myRegister.cost);
        setTerm(myRegister.term);
        setRoomStructure(myRegister.roomStructure);
        setRoomSize(myRegister.roomSize);
        setLocation(myRegister.location);
    });


    return(
        <Form>
            <Form.Group as={Row}> 
                <Form.Label column sm="2">Room Name</Form.Label>
                <Col sm="10">
                <Form.Control placeholder={roomName} disabled />
                </Col>
            </Form.Group>
            <Form.Group>
                <Form.Label>Cost</Form.Label>
                <Form.Control placeholder={cost} disabled />

            </Form.Group>
            <Form.Group>
                <Form.Label>Term</Form.Label>
                <Form.Control placeholder={term} disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Room Structure</Form.Label>
                <Form.Control placeholder={roomStructure} disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Room Size</Form.Label>
                <Form.Control placeholder={roomSize} disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Options</Form.Label>
                <Form.Control placeholder="Options" disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Advertise To</Form.Label>
                <Form.Control placeholder="Advertise To" disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Explanation</Form.Label>
                <Form.Control placeholder={explanation} disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Intro Video</Form.Label>
                <Form.Control placeholder="Intro Video" disabled />
                <YoutubeEmbeded url="xqFvYsy4wE4" />
            </Form.Group>            
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder={location} disabled />
            </Form.Group>
        </Form>
    )
}

export default ItemInfoForm;