import React, { useState, Component } from 'react';
import { Button, FormControl, Form, FormGroup } from 'react-bootstrap';
import styled from 'styled-components';

const LeftInput = styled.span`
  display: inline-block;
  width: 48%;
  height: 40%;
  padding: 4px 4px 4px 4px;
`;
const RightInput = styled.span`
  display: inline-block;
  width: 50%;
  height: 5%;
  padding: 4px 4px 4px 4px;
`;
const Text = styled.text`
  display: inline-block;
  width: 20%;
  height: 5%;
`;
const InputWindow = styled.input`
  margin-left: 0.3rem;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const CostInput = styled.input`
  width: 3rem;
  margin-left: 0.3rem;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;
const Explanation = styled.input`
  width: 70%;
  height: 40%;
  margin-left: 0.3rem;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`
const Margin = styled.div`
  display: inline-block;
  width: 70%;
  vertical-align: middle;
  margin: 0 auto;
`

class RegisterForm extends Component {
  state = {
    RoomName: '',
    Location: '',
    CostperDay: '',
    CostperWeek: '',
    CostperMonth: '',
    TermOrigin: '',
    RoomStructure: '',
    RoomSize: '',
    Options: '',
    AdvertiseTo: '',
    Explanation: '',
    IntroVideo: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  render() {
    return (
      <form>
        <div>
          <LeftInput>
            <Text>Room Name</Text>
            <InputWindow
              placeholder="Room Name"
              value={this.state.RoomName}
              onChange={this.handleChange}
              name="RoomName"
            />
          </LeftInput>
          <RightInput>
            <Text>Location</Text>
            <InputWindow
              placeholder="Location"
              value={this.state.Location}
              onChange={this.handleChange}
              name="Location"
            />
          </RightInput>
        </div>
        <div>
          <LeftInput>
            <Text>Cost</Text>
            <CostInput
              placeholder="/Day"
              value={this.state.CostperDay}
              onChange={this.handleChange}
              name="CostperDay"
            />
            <CostInput
              placeholder="/Week"
              value={this.state.CostperWeek}
              onChange={this.handleChange}
              name="CostperWeek"
            />
            <CostInput
              placeholder="/Month"
              value={this.state.CostperMonth}
              onChange={this.handleChange}
              name="CostperMonth"
            />
          </LeftInput>
        </div>
        <div>
          <LeftInput>
            <Text>Term</Text>
            <InputWindow
              placeholder="Term"
              value={this.state.TermOrigin}
              onChange={this.handleChange}
              name="TermOrigin"
            />
          </LeftInput>
        </div>
        <div>
          <LeftInput>
            <Text>Room Structure</Text>
            <InputWindow
              placeholder="RoomStructure"
              value={this.state.RoomStructure}
              onChange={this.handleChange}
              name="RoomStructure"
            />
          </LeftInput>
        </div>
        <div>
          <LeftInput>
            <Text>Room Size</Text>
            <InputWindow
              placeholder="RoomSize"
              value={this.state.RoomSize}
              onChange={this.handleChange}
              name="RoomSize"
            />
          </LeftInput>
        </div>
        <div>
          <LeftInput>
            <Text>Options</Text>
            <InputWindow
              placeholder="Options"
              value={this.state.Options}
              onChange={this.handleChange}
              name="Options"
            />
          </LeftInput>
        </div>
        <div>
          <LeftInput>
            <Text>Advertise To</Text>
            <InputWindow
              placeholder="Advertise To"
              value={this.state.AdvertiseTo}
              onChange={this.handleChange}
              name="AdvertiseTo"
            />
          </LeftInput>
        </div>
        <div>
          <LeftInput>
            <Text>Explanation</Text>
            <Explanation
              placeholder="Explanation"
              value={this.state.Explanation}
              onChange={this.handleChange}
              name="Explanation"
            />
          </LeftInput>
        </div>
        <div>
          <LeftInput>
            <Text>Intro Video</Text>
            <InputWindow
              placeholder="Intro Video"
              value={this.state.IntroVideo}
              onChange={this.handleChange}
              name="IntroVideo"
            />
          </LeftInput>
        </div>
        <div>{this.state.RoomName}</div> 
        <div>{this.state.Location}</div>
        <Margin>
          <Form>
            <Form.Group controlId="RoomName">
              <Form.Label>Room Name</Form.Label>
              <Form.Control type="RoomName" placeholder="Room Name" />
            </Form.Group>

            <Form.Group controlId="Location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="Location" placeholder="Location" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </Margin>
      </form>
      
    );
  }
}

export default RegisterForm;