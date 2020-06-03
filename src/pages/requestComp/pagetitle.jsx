import React from 'react';
import './pagetitle.scss';
import { render } from '@testing-library/react';

class PageTitle extends React.Component {
  state = {
    title: "Request Manage"
  }
  render() {
    return (
      <h1 className = "pagetitle">
        {this.state.title}
      </h1>
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
export default PageTitle;

//   <Calview id="cal1"/>