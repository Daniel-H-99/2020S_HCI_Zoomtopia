import React, { useState } from 'react';
import styled from 'styled-components';

const MainStyle = styled.div`
  padding-top: 4rem;
  padding-left: 0.5rem;
  position: absolute;
  z-index: 1;
  height: 100%;
  box-sizing: border-box;
  width: 50%;
`;

const Main = props => {
  const { children } = props;

  return <MainStyle style={{width: 700}}>{children}</MainStyle>;
};

export default Main;
