import React from 'react';
//import './Calendar.scss';
import Salendar from './Calendar.jsx';
import PageTitle from './pagetitle.jsx';
import PageData from './requestdata.jsx';
import { render } from '@testing-library/react';

var datedata = [
  {startY:"2020"},
  {startM:"6"},
  {startD:"12"},
  {endY:"2020"},
  {endM:"6"},
  {endD:"29"}
];

class Calview extends React.Component {
  state={
    textAlign: "center"
  }
  render() {
    const mystyle = {
      //position: 'absolute',
      //left: '50%',
      //transform: "translate(-50%, 10%)",
      //float: 'left',
    
      margin: '0 auto',
      padding: "10px",
      width: "500px",
      height: "370px",
      minheight: "100px",
      border : '2px solid lightblue',
      borderRadius: '6%'
      //backgroundColor: '#f6f6f6'
      //overflow: "auto"
    };
    return (
      <div style={mystyle}><Salendar/>
      </div>
    );
  }
}

class Requestmanage extends React.Component{
  state = {
    title: 'hello'
  }
  render() {
    const thisstyle = {
      flex: 1,
      flexDirection: "row",
      alignItems: 'center',
    }
    return (
      <main style={thisstyle}>
        <section>
          <PageTitle id = "mytitle1"/>
        </section>
        <div>
         <Calview id="cal1"/>
        </div>
        <section>
          <PageData id = "mydata1"/>
        </section>
      </main>

    )
  }
}

export default Requestmanage;

//   <Calview id="cal1"/>