//importing react components and css
import React from 'react';
import Form from 'react-bootstrap/Form'

import SampleReq from './SampleReq.jsx';
import PageTitle from './pagetitle.jsx';
import ConfirmData from './requestdata.jsx';
import MyCheckbox from './MyCheckbox.jsx';

import Main from '../../components/Main';
import Header from '../../components/Header';
import { render } from '@testing-library/react';
import { addDays } from 'date-fns';

// testing variables
const reqData = [
    {username: 'kim', From:'2020-06-09', To:'2020-06-14'},
    {username: 'hwang', From:'2020-06-15', To:'2020-06-30'},
    {username: 'eom', From:'2020-07-01', To:'2020-07-20'}
  ];


//components
class Calview extends React.Component {
  state={
    textAlign: "center"
  }
  render() {
    const mystyle = {
      //position: 'absolute',
      //left: '50%',
      //transform: "translate(-50%, 10%)",
      width: '670px',
      margin: '0 auto',
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      minheight: "100px",
      //borderBottom : '0px solid lightblue',
      //borderRadius: '1%'
      //backgroundColor: '#f6f6f6'
      //overflow: "auto"
    };

    let nowdata = this.props.nowShow;
    let selectionRanges = []

    for (let idx = 0; idx<nowdata.length; idx++){
      for(let user in reqData){
        if(nowdata[idx].name==reqData[user].username){
          let tempdata = {
            startDate: new Date(reqData[user].From),
            endDate: new Date(reqData[user].To),
            //color: 'lightgreen',
            key: reqData[user].username,
          }
          selectionRanges = selectionRanges.concat(tempdata);
        }
      }
    }
    if(selectionRanges.length==0){
      selectionRanges= selectionRanges.concat({
        startDate: new Date(),
        endDate: new Date(),
        color: 'lightgreen',
        key: 'default today',
      })
    }

    let month=2;

    return (
      <div style={mystyle}>
        <SampleReq
          month={month}
          ranges = {selectionRanges}
        /></div>);}
}

class FormMing extends React.Component{
  constructor(props){
    super(props);
    this.handleChildbox = this.handleChildbox.bind(this);
  }
  handleChildbox(name, checked){
    this.props.handleCalshow(name,checked);
  }

  render(){
    return (
      reqData.map((users, i) => (
        <MyCheckbox
          key = {i} className = "hong-checkbox"
          request = {users.username}
          handleChildbox = {this.handleChildbox}
        />))
    );
  }
}


class RequestManage extends React.Component{
  constructor(props){
    super(props);
    this.state = {ranges: []};
    this.handleCalshow = this.handleCalshow.bind(this);
  }

  handleCalshow(name, checked){
    const {ranges} = this.state;
    if(checked){
      this.setState({ranges: ranges.concat({name: name})})
    }
    else{
      this.setState({ranges: ranges.filter(info=>info.name !==name)})
    }
  }

  render() {
    return (
      <>
      <Header/>
      <Main>
        <div>
          <PageTitle id = "mytitle1"/>
        </div>
        <section style={{display:'block', width: '700px', margin:'0 auto' }}>
          <div style={{width: '670px', height: '480px', borderBottom : '3px solid lightblue', margin:'2 auto'}}>
          <Calview id="cal1" nowShow = {this.state.ranges}/>
          </div>
          <div style = {{ width: '600px', margin:'0 auto'}}>
            <p>Requests: {reqData.length} </p>
            <FormMing handleName = {this.handleName}
              handleCalshow= {this.handleCalshow} />
            <div className="confirmbutton">
              <ConfirmData/>
            </div>
          </div>
        </section>
      </Main>
      </>
    )
  }
}

export default RequestManage;

//   <Calview id="cal1"/>

/*
<section>
  <PageData id = "mydata1"/>
</section>
*/
