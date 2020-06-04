import React from 'react';
import SampleReq from './SampleReq.jsx';
import PageTitle from './pagetitle.jsx';
import PageData from './requestdata.jsx';
import { render } from '@testing-library/react';

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
    return (
      <section>
      <div style={mystyle}><SampleReq/>
      </div>
      </section>
    );
  }
}

class RequestManage extends React.Component{
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
      <main>
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

export default RequestManage;

//   <Calview id="cal1"/>
