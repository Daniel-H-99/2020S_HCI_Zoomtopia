import React from 'react';
import {Button, Card, CardDeck} from 'react-bootstrap';
import './requestdata.scss';
import { render } from '@testing-library/react';


class reqData extends React.Component {


}


class ConfirmData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
 
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }
 
  render() {
    return (
      <Button variant="primary" onClick={this.handleClick} >Confirm</Button>
    );
  } 
}


class MyCheckbox extends React.Component {
  state = {
    checked: false
  };

  handleChange = (e) => {
    const { target: { checked } } = e;
    this.setState({ checked });
  };
  render() {
    return (
      <input
          type="checkbox"
          checked={this.state.checked}
          onChange={this.handleChange}
      />
    );
  }
}


class PageData extends React.Component {
  state = {
    title: "Requests",
    request1: "user1    ",
    request2: "user2    ",
    confirm: "confirm"
  }
  render() {
    return (
      <div>
        <h3 className = "requesttitle">
          {this.state.title}
        </h3>
        <div className="userrequest">
        {this.state.request1}<MyCheckbox/>
        </div>
        <div className="userrequest">
        {this.state.request2}<MyCheckbox/>
        </div>
        <div className="confirmbutton">
        <ConfirmData/>
        </div>
      </div>
    );
  }
}
/*
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

class MyApp extends React.Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          locale="en"
          calendarType="US"
        />
      </div>
    );
  }
}
*/
export default PageData;

//   <Calview id="cal1"/>