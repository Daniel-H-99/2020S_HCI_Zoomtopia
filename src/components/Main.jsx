import React, { useState } from 'react';
import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';

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
    <>
    <div style={{display: "table", width: "100%"}}>
      <MainStyle style={{width: "100%"}}>
        {children}
        <Navbar bg="rgba(255,255,255,0)" variant="rgba(255,255,255,0)" sticky="bottom" style={{paddingTop: '10%'}}>
          <div class="footer-copyright text-center py-3" style={{width: '100%', textAlign: 'center'}}>
            <hr/>
            © 2020 Copyright: Zoomtopia
          </div>
        </Navbar>
      </MainStyle>;
    </div>

    </>
  )
};

export default Main;
