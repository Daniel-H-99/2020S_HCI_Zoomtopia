import React from 'react';

import SampleReq from './SampleReq.jsx';
import PageTitle from './pagetitle.jsx';
import PageData from './requestdata.jsx';

import Main from '../../components/Main';
import Header from '../../components/Header';
import { render } from '@testing-library/react';
import { addDays } from 'date-fns';

let gchecked = false;
let gchecked2 = false;

class Calview extends React.Component {
  state={
    textAlign: "center"
  }
  render() {
    const mystyle = {
      //position: 'absolute',
      //left: '50%',
      //transform: "translate(-50%, 10%)",
      float: 'left',
      margin: '10px auto',
      marginLeft: '80px',
      paddingLeft: "10px",
      paddingRight: "10px",
      paddingTop: "10px",
      minheight: "100px",
      border : '0px solid lightblue',
      borderRadius: '1%'
      //backgroundColor: '#f6f6f6'
      //overflow: "auto"
    };
    const selectionRange = {
      startDate: new Date(),
      endDate: addDays(new Date(), 20),
      //color: 'lightgreen',
      key: 'selection',
    }

    const selectionRange2 = {
      startDate: addDays(new Date(), 23),
      endDate: addDays(new Date(), 37),
      //color: 'lightgreen',
      key: 'selection2',
      showDataDisplay: false
    }

    let selectionRanges = [];
    selectionRanges = selectionRanges.concat(selectionRange);
    let month=2;

    if (gchecked==false){
      selectionRanges = [selectionRange];
    } else {
      selectionRanges = selectionRanges.concat(selectionRange2);
    }

    return (
      <section>
      <div style={mystyle}>
        <SampleReq
          month={month}
          ranges = {selectionRanges}
        />
      </div>
      </section>
    );
  }
}


class RequestManage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: 'hello',
      checked: false,
      checked2: false
    };

    this.handleChange = this.handleChange.bind(this);
    //this.handleChange = this.handleChange2.bind(this);
  }

  handleChange = (e) => {
    const { target: { checked } } = e;
    this.setState({ checked });
    gchecked = this.state.checked;
  };

  render() {
    return (
      <>
      <Header/>
      <Main>
        <section>
          <PageTitle id = "mytitle1"/>
        </section>
        <div>
         <Calview id="cal1"/>
        </div>
        <input
            type="checkbox"
            checked={this.state.checked}
            onChange={this.handleChange}
        />
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
