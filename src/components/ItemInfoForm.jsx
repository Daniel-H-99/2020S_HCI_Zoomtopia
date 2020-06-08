import React, { useState, Component } from 'react';
import {Form} from 'react-bootstrap';
import YoutubeEmbeded from '../components/YouTubeEmbeded';
import firebase from '../components/Firestore';

function ItemInfoForm(props) {
    const [roomName, setRoomName] = useState('');
    const [explanation, setExplanation] = useState('');
    const [cost, setCost] = useState(0);
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [roomStructure, setRoomStructure] = useState('');
    const [roomSize, setRoomSize] = useState(0);
    const [location, setLocation] = useState('');
    const [aircon, setAircon] = useState(false);
    const [refriger, setRefriger] = useState(false);
    const [washer, setWasher] = useState(false);
    const [gasRange, setGasRange] = useState(false);
    const [bed, setBed] = useState(false);
    const [desk, setdesk] = useState(false);
    const [wardrobe, setWardrobe] = useState(false);
    const [sink, setSink] = useState(false);
    const [stove, setStove] = useState(false);
    const [videoID, setVideoID] = useState('');


    const db = firebase.firestore();
    const userDoc = db.collection('userID').doc(props.userID);

    userDoc.get().then(function(doc){
        const myRegister = doc.data().MyRegister;
        const options = myRegister.Options;
        setRoomName(myRegister.RoomName);
        setExplanation(myRegister.Explanation);
        setCost(myRegister.CostperDay);
        setFrom(myRegister.From);
        setTo(myRegister.To);
        setRoomStructure(myRegister.RoomStructure);
        setRoomSize(myRegister.RoomSize);
        setLocation(myRegister.Location);
        setAircon(options.Aircon);
        setBed(options.Bed);
        setdesk(options.Desk);
        setGasRange(options.Gasrange);
        setRefriger(options.Refriger);
        setSink(options.Sink);
        setStove(options.Stove);
        setWardrobe(options.Wardrobe);
        setWasher(options.Washer);

        const rawUrl = myRegister.IntroVideo;
        setVideoID(rawUrl.split("v=")[1].split('&')[0]);

    });

    return(
        <Form>
            <h2>Item Information</h2><br/>
            <Form.Group> 
                <Form.Label>Room Name</Form.Label>
                <Form.Control placeholder={roomName} disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Intro Video</Form.Label>
                <Form.Control placeholder="Intro Video" disabled />
                <YoutubeEmbeded url={videoID} />
            </Form.Group>    
            <Form.Group>
                <Form.Label>Location</Form.Label>
                <Form.Control placeholder={location} disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Cost per Day</Form.Label>
                <Form.Control placeholder={cost} disabled />
            </Form.Group>
            <Form.Group>
                <Form.Label>Term</Form.Label>
                <Form.Control placeholder={from + " ~ " + to} disabled />
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
              <div>
                <Form.Check inline label="Aircon" checked={aircon} disabled/>
                <Form.Check inline label="Refriger" checked={refriger} disabled/>
                <Form.Check inline label="Washer" checked={washer} disabled/>
                <Form.Check inline label="Gas range" checked={gasRange} disabled/>
                <Form.Check inline label="Bed" checked={bed} disabled/>
                <Form.Check inline label="Desk" checked={desk} disabled/>
                <Form.Check inline label="Wardrobe" checked={wardrobe} disabled/>
                <Form.Check inline label="Sink" checked={sink} disabled/>
                <Form.Check inline label="Stove" checked={stove} disabled/>
            </div>
            </Form.Group>
            <Form.Group>
                <Form.Label>Explanation</Form.Label>
                <Form.Control placeholder={explanation} disabled />
            </Form.Group>
        </Form>
    )
}

export default ItemInfoForm;