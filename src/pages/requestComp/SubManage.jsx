//importing react components and css
import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import SampleReq from './SampleReq.jsx';
import PageTitle from './pagetitle.jsx';
import ConfirmData from './requestdata.jsx';
import MyCheckbox from './MyCheckbox.jsx';

import { render } from '@testing-library/react';
import { addDays } from 'date-fns';

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

    const mycolorbox = ['lightgreen', 'lightblue'];

    let dataBase = this.props.reqDbase;
    let nowdata = this.props.nowShow;
    let selectionRanges = [];
    const myfrom = this.props.myfrom;
      const myto = this.props.myto;
      
      if(myfrom!=''&&myto!=''){
        selectionRanges= selectionRanges.concat({
          startDate: new Date(myfrom),
          endDate: new Date(myto),
          color: '#FED137',
          key: 'default today',
        });
      }else {
        selectionRanges= selectionRanges.concat({
          startDate: addDays(new Date(), 30),
          endDate: addDays(new Date(),30),
          color: 'white',
          key: 'default today',
        });
      }

    for (let idx = 0; idx<nowdata.length; idx++){
      for(let user in dataBase){
        if(nowdata[idx].name==dataBase[user].email){
          let tempdata = {
            startDate: new Date(dataBase[user].From),
            endDate: new Date(dataBase[user].To),
            color: mycolorbox[user],
            key: dataBase[user].id
          }
          selectionRanges = selectionRanges.concat(tempdata);
        }
      }
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
    let reqDatas = this.props.reqDbase;
    return (
      reqDatas.map((users, i) => (
        <div><MyCheckbox
          key = {i} className = "hong-checkbox"
          request = {users.email} From = {users.From} To = {users.To}
          handleChildbox = {this.handleChildbox}
        />
        </div>))
    );
  }
}


class SubManage extends React.Component{
  constructor(props){
    super(props);
    this.state = {ranges: []};
    this.handleCalshow = this.handleCalshow.bind(this);
    this.handleConfirm2 = this.handleConfirm2.bind(this);
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
  handleConfirm2(){
    this.props.handleConfirmFinal(this.state.ranges);
  }

  render() {
    const ownFrom = this.props.From;
    const rcAdata  = this.props.reqDBase;
    let rcdata = [];
    for (let user = 0; user<rcAdata.length; user++){
      rcdata = rcdata.concat(rcAdata[user]);
    } ;

    return (
      <>
        <div>
          <PageTitle id = "mytitle1"/>
        </div>
        <section style={{display:'block', width: '700px', margin:'0 auto' }}>
          <div style={{width: '670px', height: '480px', borderBottom : '3px solid lightblue', margin:'2 auto'}}>
          <Calview id="cal1" nowShow = {this.state.ranges} myfrom = {this.props.From} myto = {this.props.To} reqDbase ={rcdata} />
          </div>
          <div style = {{ width: '600px', margin:'0 auto'}}>
            <p style={{ fontFamily: 'Ubuntu, sans-serif'}}>Requests:  </p>
            <FormMing handleName = {this.handleName}
              handleCalshow= {this.handleCalshow}  reqDbase ={rcdata} />
            <div className="confirmbutton">
              <Link to = "/MyPage">
                <ConfirmData handleConfirm1 = {this.handleConfirm2}/>
              </Link>
            </div>
          </div>
        </section>

      </>
    )
  }
}

export default SubManage;

//   <Calview id="cal1"/>

/*
<section>
  <PageData id = "mydata1"/>
</section>
*/
