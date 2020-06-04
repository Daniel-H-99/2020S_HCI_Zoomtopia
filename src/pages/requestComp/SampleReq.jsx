import React, { Component } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { addDays } from 'date-fns';
import { useState } from 'react';


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
    return (
      <DateRangePicker
        ranges={[selectionRange, selectionRange2]}
        onChange={this.handleSelect}
        months={2}
        direction="horizontal"
      />
    )
  }
}

export default SampleReq;

//   <Calview id="cal1"/>
