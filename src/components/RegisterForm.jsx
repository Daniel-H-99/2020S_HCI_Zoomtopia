import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';
import firebase from '../components/Firestore';


const Margin = styled.div`
  display: inline-block;
  width: 70%;
  vertical-align: middle;
  margin: 0 auto;
`

const userID = "user4";


const writeData = (userID, RoomName, IntroVideo, Location, CostperDay, Term, RoomStructure, RoomSize, Explanation) => {
  return firebase.firestore().collection('userID').doc(userID)
      .update({
        MyRegister: {
          RoomName: RoomName,
          IntroVideo: IntroVideo,
          Location: Location,
          CostperDay: CostperDay,
          From: Term,
          To: Term,
          RoomStructure: RoomStructure,
          RoomSize: RoomSize,
          Explanation: Explanation,
          Confirm: false
        },
        Request: 
          [{
            email: "dksow@kaist.ac.kr",
            id: "dsasdsds351",
            phone: "01023251244",
            From: "2020-07-22",
            To: "2020-08-02",
            Confirm: false
          },
          {
            email: "xodbs@kaist.ac.kr",
            id: "ggang351",
            phone: "01023551244",
            From: "2020-08-03",
            To: "2020-08-13",
            Confirm: false
          }]
      });
};


class RegisterForm extends Component {
  state = {
    RoomName: '',
    IntroVideo: '',
    Location: '',
    CostperDay: '',
    Term: '',
    RoomStructure: 'One Room',
    RoomSize: '',
    Options: [],
    Explanation: '',
  }
  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  handleSubmit = (event) => {
    const db = firebase.firestore();
    event.preventDefault();
    if (this.state.RoomName === ''){
      alert('Please Enter Room Name');
      console.log("1");
    }
    else if (this.state.IntroVideo === ''){
      alert('Please Enter Video URL');
      console.log("2");
    }
    else if (this.state.Location === ''){
      alert('Please Enter Location');
      console.log("3");
    }
    else if (this.state.CostperDay === ''){
      alert('Please Enter Cost per Day');
      console.log("4");
    }
    else if (this.state.Term === ''){
      alert('Please Enter Term');
      console.log("5");
    }
    else if (this.state.RoomStructure === ''){
      alert('Please Select Room Structure');
      console.log("6");
    }
    else if (this.state.RoomSize === ''){
      alert('Please Enter Room Size');
      console.log("7");
    }
    else if (this.state.Explanation === ''){
      alert('Please Enter Explanation about room');
      console.log("8");
    }
    else {
      alert('Success to register your room!');
      writeData(userID, this.state.RoomName, this.state.IntroVideo, this.state.Location, this.state.CostperDay, this.state.Term, this.state.RoomStructure, this.state.RoomSize, this.state.Explanation);
      event.preventDefault();
      console.log("9");
    }
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Margin>
          <Form>
            <Form.Group controlId="RoomName">
              <Form.Label>Room Name</Form.Label>
              <Form.Control type="RoomName" name="RoomName" placeholder="Room Name" onChange={this.handleChange} />
            </Form.Group>
            

            <Form.Group controlId="RoomImage">
              <Form.File id="RoomImage" name="File" label="Room image file input" />
            </Form.Group>

            <Form.Group controlId="IntroVideo">
              <Form.Label>Intro Video</Form.Label>
              <Form.Control type="IntroVideo" name="IntroVideo" placeholder="Please upload your introduction video (Youtube URL)" onChange={this.handleChange} />
            </Form.Group>

            <Form.Group controlId="Location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="Location" name="Location" placeholder="Location" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="CostperDay">
              <Form.Label>Cost per Day</Form.Label>
              <Form.Control type="CostperDay" name="CostperDay" placeholder="Enter the Only Number Cost per Day (Won)" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="Term">
              <Form.Label>Term</Form.Label>
              <Form.Control type="Term" name="Term" placeholder="Term" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="RoomStructure">
              <Form.Label>Room Structure</Form.Label>
              <Form.Control as="select" name="RoomStructure" defaultValue={this.state.RoomStructure} onChange={this.handleChange}>
                <option>One Room</option>
                <option>Two Room</option>
                <option>Three Room</option>
              </Form.Control>
              <div>{this.state.RoomStructure}</div>
            </Form.Group>

            <Form.Group controlId="RoomSize">
              <Form.Label>Room Size</Form.Label>
              <Form.Control type="RoomSize" name="RoomSize" placeholder="Enter the Only Number Room Size (m^2)" onChange={this.handleChange}/>
            </Form.Group>

            <Form.Group controlId="Options">
              <Form.Label>Options</Form.Label>
              {['checkbox'].map((type) => (
              <div key={`inline-${type}`} className="mb-3">
                <Form.Check inline label="Aircon" type={type} id={`inline-${type}-1`} />
                <Form.Check inline label="Refriger" type={type} id={`inline-${type}-2`} />
                <Form.Check inline label="Washer" type={type} id={`inline-${type}-3`} />
                <Form.Check inline label="Gas range" type={type} id={`inline-${type}-4`} />
                <Form.Check inline label="Bed" type={type} id={`inline-${type}-5`} />
                <Form.Check inline label="Desk" type={type} id={`inline-${type}-6`} />
                <Form.Check inline label="Wardrobe" type={type} id={`inline-${type}-7`} />
                <Form.Check inline label="Sink" type={type} id={`inline-${type}-8`} />
                <Form.Check inline label="Stove" type={type} id={`inline-${type}-9`} />
              </div>
              ))}
            </Form.Group>

            <Form.Group controlId="Explanation">
              <Form.Label>Explanation</Form.Label>
              <Form.Control type="Explanation" name="Explanation" placeholder="Explanation" as="textarea" rows="5" onChange={this.handleChange}/>
            </Form.Group>

            <Button variant="primary" type="submit" value="Submit">
              Register
            </Button>
          </Form>
          
        </Margin>
      </form>
      
    );
  }
}

export default RegisterForm;