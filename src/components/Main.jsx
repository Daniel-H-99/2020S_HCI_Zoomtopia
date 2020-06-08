import React, { useState } from 'react';
import styled from 'styled-components';

const MainStyle = styled.div`
  display: table-cell;
  padding-top: 4rem;
  padding-bottom: 4rem;
  padding-left: 300px;
  padding-right: 300px;
  z-index: 1;
  height: 100%;
  box-sizing: border-box;
  vertical-align: middle; 
  margin: 0 auto;
  background: linear-gradient(to right bottom, 	#DCEBFF, #E6FFE6);


`;

const Main = props => {
  const { children } = props;

  return (
    <div style={{display: "table", width: "100%"}}>
      <MainStyle style={{width: "100%"}}>{children}</MainStyle>;
    </div>
  )
};

export default Main;
