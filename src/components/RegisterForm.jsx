import React, { Component } from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { Button, Form, OverlayTrigger, Tooltip } from 'react-bootstrap';
import styled from 'styled-components';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from "react-dates";
import firebase from '../components/Firestore';


const Margin = styled.div`
  display: inline-block;
  width: 70%;
  vertical-align: middle;
  margin: 0 auto;
`



const RandomRequset = (startDate, endDate) => {
  const Start = startDate.format("YYYYMMDD");
  const Syear = Start.slice(0,4);
  const Smonth = Start.slice(4,6);
  const Sday = Start.slice(6);
  const newStart = Syear + '/' + Smonth + '/' + Sday;

  const EndDay = endDate.subtract(1, 'days').startOf('day')
  const End = EndDay.format("YYYYMMDD");
  const Eyear = End.slice(0,4);
  const Emonth = End.slice(4,6);
  const Eday = End.slice(6);
  const newEnd = Eyear + '/' + Emonth + '/' + Eday;

  const startdate = new Date(newStart);
  const enddate = new Date(newEnd);

  return new Date(startdate.getTime() + Math.random() * (enddate.getTime() - startdate.getTime()));

}

const writeData = (userID, RoomName, IntroVideo, Location, CostperDay, startDate, endDate, RoomStructure, RoomSize, Options, Explanation, firstRequestEnd, secondRequestStart) => {
  return firebase.firestore().collection('userID').doc(userID)
      .update({
        MyRegister: {
          RoomName: RoomName,
          IntroVideo: IntroVideo,
          Location: Location,
          CostperDay: CostperDay,
          From: startDate,
          To: endDate,
          RoomStructure: RoomStructure,
          RoomSize: RoomSize,
          Options: Options,
          Explanation: Explanation,
          Confirm: false
        },
        Request: 
          [{
            email: "dksow@kaist.ac.kr",
            id: "wlsxodyd",
            phone: "01097657342",
            From: startDate,
            To: firstRequestEnd,
            Explanation: "22, Male, Smoker",
            Confirm: false
          },
          {
            email: "xodbs@kaist.ac.kr",
            id: "1day10ggang",
            phone: "01023551244",
            From: secondRequestStart,
            To: endDate,
            Explanation: "24, Female, Not Smoker",
            Confirm: false
          }]
      });
};


class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: false,
      RoomName: '',
      IntroVideo: '',
      Location: '',
      CostperDay: '',
      startDate: null,
      endDate: null,
      RoomStructure: 'One Room',
      RoomSize: '',
      Options: {
        Aircon: false,
        Refriger: false,
        Washer: false,
        Gasrange: false,
        Bed: false,
        Desk: false,
        Wardrobe: false,
        Sink: false,
        Stove: false
      },
      Explanation: ''
    }
  }
  parsingDate = (e) => {
    this.state.startDate = this.state.startDate.format("YYYY-MM-DD");
    this.state.endDate = this.state.endDate.format("YYYY-MM-DD");
  }
  handleOption = (e) => {
    const id = e.target.id;
    console.log(id);
    var options = this.state.Options[id];

    if (e.target.checked) {
      options = true;
    } 
    else {
      options = false;
    }

    this.setState(prevState => ({
      Options: {
        ...prevState.Options,
        [id]: options}
      }
    ));
    console.log("options", this.state.Options);
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
    else if (this.state.From === '') {
      alert('Please Enter Term');
      console.log("5");
    }
    else if (this.state.To === '') {
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
      const request = RandomRequset(this.state.startDate, this.state.endDate);
      const firstRequestEnd = request.toISOString().slice(0,10);
      const secondRequestStart = new Date(request.setDate(request.getDate() + 1)).toISOString().slice(0,10);
      this.parsingDate();
      
      this.setState({[this.state.checking]: true})
      console.log(this.state.checking)
      writeData(this.props.user, this.state.RoomName, this.state.IntroVideo, this.state.Location, this.state.CostperDay, this.state.startDate, this.state.endDate, this.state.RoomStructure, this.state.RoomSize, this.state.Options, this.state.Explanation, firstRequestEnd, secondRequestStart);
      alert('Success to register your room!');
      console.log("9");
      this.props.history.push("/MyPage");
    }
    
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br/><h2 style={{ fontFamily: 'Ubuntu, sans-serif'}}>Register Room</h2><hr/><br/>
        <Form>
          <Form.Group controlId="RoomName">
            <Form.Label>Room Name</Form.Label>
            <Form.Control type="RoomName" name="RoomName" placeholder="Room Name" onChange={this.handleChange} />
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
            <OverlayTrigger style={{textAlign: "left"}}
              placement="right"
              overlay={
              <Tooltip style={{textAlign: "left"}}>
                  ex.10000: 300thousand Won monthly fee,<p></p>
                  15000: 450thousand Won monthly fee
              </Tooltip>
              }>
              <Button variant="link" size="m">(?)</Button>
            </OverlayTrigger>{' '}
            <Form.Control type="CostperDay" name="CostperDay" placeholder="Enter the Only Number Cost per Day (Won)" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="Term">
            <div>
              <Form.Label>Term</Form.Label>
            </div>
            <DateRangePicker 
              startDate={this.state.startDate}
              startDateId="startDate"
              endDate={this.state.endDate}
              endDateId="endDate"
              onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} 
              focusedInput={this.state.focusedInput}
              onFocusChange={focusedInput => this.setState({ focusedInput })}
            />
          </Form.Group>

          <Form.Group controlId="RoomStructure">
            <Form.Label>Room Structure</Form.Label>
            <Form.Control as="select" name="RoomStructure" defaultValue={this.state.RoomStructure} onChange={this.handleChange}>
              <option>One Room</option>
              <option>Two Room</option>
              <option>Three Room</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="RoomSize">
            <Form.Label>Room Size</Form.Label>
            <Form.Control type="RoomSize" name="RoomSize" placeholder="Enter the Only Number Room Size (m^2)" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group controlId="Options">
            <Form.Label>Options</Form.Label>
            {['checkbox'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
              <Form.Check inline label="Aircon" type={type} id="Aircon" onChange={this.handleOption}/>
              <Form.Check inline label="Refriger" type={type} id="Refriger" onChange={this.handleOption}/>
              <Form.Check inline label="Washer" type={type} id="Washer" onChange={this.handleOption}/>
              <Form.Check inline label="Gas range" type={type} id="Gasrange" onChange={this.handleOption}/>
              <Form.Check inline label="Bed" type={type} id="Bed" onChange={this.handleOption}/>
              <Form.Check inline label="Desk" type={type} id="Desk" onChange={this.handleOption}/>
              <Form.Check inline label="Wardrobe" type={type} id="Wardrobe" onChange={this.handleOption}/>
              <Form.Check inline label="Sink" type={type} id="Sink" onChange={this.handleOption}/>
              <Form.Check inline label="Stove" type={type} id="Stove" onChange={this.handleOption}/>
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
      </form>
    );
  }
}

export default withRouter(RegisterForm);