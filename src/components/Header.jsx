import React, { useState } from 'react';
import styled from 'styled-components';
import {Button, Dropdown, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SignInModal from './SignInModal';

// const StyledHeader = styled.div`
//   height: 40px;
//   padding: 5px;
//   min-width: 120px;
//   color: white;
//   font-weight: 600;
//   background-color: ${props => (props.danger ? 'red' : 'purple')};
// `;

const NavHeader = styled.nav`
  padding: 0.5rem 1rem !important;
  background-color: black;
  letter-spacing: 0.05rem;
  font-weight: bold;
  position: absolute;
  width: 100%;
  z-index: 2;
  box-sizing: border-box;
`;

const FontsHeader = styled.span`
  vertical-align: middle;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-size: 18pt;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  vertical-align: middle;
`;

const ButtonStyle = styled.button`
  outline-color: #d48a6e;
  float: right;
  margin-right: 0px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const ImageButton = styled.img`
  float: right;
  margin-right: 0px;
  border: none;
  background-color: none;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  margin-top: 3px;
`;

const UlHeader = styled.ul`
  font-weight: bold;
  color: white;
  list-style: none;
  line-height: 1.8rem;

  li {
    font-weight: bold;
  }
`;

const SideList = () => {
  return (
    <UlHeader>
      <li>My Page</li>
      <li>Log in</li>
      <li>Settings</li>
    </UlHeader>
  );
};

const Header = props => {
  const { children, authed, user, setUser, setAuthed} = props;
  //console.log(authed, user);
  const [toggle, setToggle] = useState(false);

  const onIncrease = e => {
    e.preventDefault();
    setToggle(prev => !prev);
  };
  const [modalShow, setModalShow] = React.useState(false);
  const [isSignIn, changeInOrUp] = React.useState(true);

  return (
    <>
      <NavHeader>
        <Link to="/">
          <span>
            <FontsHeader>Roomtopia</FontsHeader>
          </span>
        </Link>
        {!authed?
            <Button style={{float: 'right', marginRight: 10}} onClick={() => {console.log (22);setModalShow(true)}} variant="outline-light">Sign In</Button> :
            <Dropdown as={ButtonGroup} style={{float: 'right', marginRight: 10}}>
              <Button style={{float: 'right', marginRight: 0}} variant="outline-light">{user}</Button>    
              <Dropdown.Toggle split variant="outline-light" id="dropdown-basic"></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {setUser(null);setAuthed(false)}}>Sign Out</Dropdown.Item>  
              </Dropdown.Menu>
            </Dropdown>
        }

        {!authed?
            <Button style={{float: 'right', marginRight: 10}} onClick={() => {setModalShow(true)}} variant="outline-light">My Page</Button> :
          <Link to="/MyPage">
            <Button style={{float: 'right', marginRight: 10}} variant="outline-light">My Page</Button>  
          </Link>
        }  
        
      </NavHeader>
      {modalShow?<SignInModal closable show={modalShow} onHide={() => {setModalShow(false);console.log(44);}}/>:null}
      
      {children}
    </>
  );
};

export default Header;
