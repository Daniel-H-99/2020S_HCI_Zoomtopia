import React, { Component } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';

import './SampleReq.scss';


class SampleReq extends Component {
  handleSelect(ranges){
    console.log(ranges);
    // {
    //   selection: {
    //     startDate: [native Date Object],
    //     endDate: [native Date Object],
    //   }
    // }
  }
  render(){
    return (
      <DateRangePicker
        ranges={this.props.ranges}
        onChange={this.handleSelect}
        months={this.props.month}
        direction="horizontal"
      />
    )
  }
}

export default SampleReq;

//   <Calview id="cal1"/>
