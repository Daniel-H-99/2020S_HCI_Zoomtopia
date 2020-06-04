import React, { useState } from 'react';
import styled from 'styled-components';
import {Button, Modal ,Form} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
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
  background-color: #333940;
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

function SignInModal(props) {
  const {signIn, convert} = props
  return (
    signIn?
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name = 'email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name = 'pw' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Row className="align-items-center">
          <div style={{margin: 'auto'}}>
        <Link to={{
          pathname: '/',
          state: {
            p : "passed"
          }
        }}>
          <Button variant="dark" type="submit" >
              Submit
          </Button>
          </Link>
          </div>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{fontSize: 10, height: 25, padding: 0, margin: 0}}>
        <div style={{margin: 'auto'}}>
        Aren't you a member? <Button style={{height: 20, fontSize: 12, padding: 0, margin: 0}} variant='link' onClick={convert}> Sign UP </Button>
        </div>
      </Modal.Footer>
    </Modal> :
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign Up
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form action="/RegisterRoom">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name = 'email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control name = 'name' type="name" placeholder="Enter Name" />
            <Form.Text className="text-muted">
              First name/ Second name
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name = 'pw' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Row className="align-items-center">
            <div style={{margin: 'auto'}}>
            <Button variant="dark" type="submit" >
                Submit
            </Button>
            </div>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{fontSize: 10, height: 25, padding: 0, margin: 0}}>
        <div style={{margin: 'auto'}}>
          Are you a member? <Button style={{height: 20, fontSize: 12, padding: 0, margin: 0}} variant='link' onClick={convert}> Sign In </Button>
        </div>
      </Modal.Footer>
    </Modal>

  );
}
const Header = props => {
  const { children } = props;

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
        <span>
          {/*<Logo src={require('../images/mamago_logo.png')}></Logo> */}
          <FontsHeader>Zoomtopia</FontsHeader>
        </span>
        <ButtonStyle type="button" onClick={onIncrease}>
          <ImageButton src={require('../icons/menu.png')} />
        </ButtonStyle>
        <ImageButton src={require('../icons/settings.png')} />
        <ImageButton src={require('../icons/home.png')} />
        {toggle && <SideList />}
        <Button style={{float: 'right', marginRight: 10}} onClick={() => {setModalShow(true); changeInOrUp(true);}} variant="outline-light">Sign In</Button>
      </NavHeader>
      <SignInModal show={modalShow} onHide={() => setModalShow(false)} signIn = {isSignIn} convert={() => changeInOrUp(prev => !prev)}/>
      {children}
    </>
  );
};

export default Header;
