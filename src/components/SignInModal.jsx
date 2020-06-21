import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import {Button, Modal ,Form} from 'react-bootstrap';
import { Route, Link, Redirect } from 'react-router-dom';

const SignInModal = (props) => {
  const {modalClose} = props
  const headerprop = props.closable?{closeButton: true}:{closeButton: true}
  const [signIn, convert] = useState(true);
  const emailRef = useRef();
  const pwRef = useRef();
  const nameRef = useRef();
  const [submit, setSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const [pw, setPW] = useState('');
  const [name, setName] = useState('');
  const onSubmit = () => {
    if (!signIn){
      setName(nameRef.current.value);
    }
    setEmail(emailRef.current.value);
    setPW(pwRef.current.value);
    setSubmit(true);
  }
  if (submit) {
    if (props.onHide != null){
      props.onHide()
    }
    if (!signIn){
      return <Redirect to={{
              pathname: '/AddAuth',
              state: {
                name: name,
                email: email,
                pw: pw
              }
            }}/>;      
    }
    return <Redirect to={{
            pathname: '/Auth',
            state: {
              email: email,
              pw: pw,
              modalClose: modalClose
            }
          }}/>;
  }
  return (
    signIn?
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      style={{backgroundColor: 'rgba( 255, 255, 255, 0 )'}}
      centered
    >
      <Modal.Header {...headerprop}>
        <Modal.Title id="contained-modal-title-vcenter">
          Sign In
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} name = 'email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={pwRef} name = 'pw' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Row className="align-items-center">
          <div style={{margin: 'auto'}}>
          <Button variant="dark" type="submit" onClick={onSubmit}>
              Submit
          </Button>
          </div>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{fontSize: 10, height: 25, padding: 0, margin: 0}}>
        <div style={{margin: 'auto'}}>
        Aren't you a member? <Button style={{height: 20, fontSize: 12, padding: 0, margin: 0}} variant='link' onClick={() => convert(prev=>!prev)}> Sign UP </Button>
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
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control ref={emailRef} name = 'email' type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control ref={nameRef} name = 'name' type="name" placeholder="Enter Name" />
            <Form.Text className="text-muted">
              First name/ Second name
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control ref={pwRef} name = 'pw' type="password" placeholder="Password" />
          </Form.Group>
          <Form.Row className="align-items-center">
            <div style={{margin: 'auto'}}>
            <Button variant="dark" type="submit" onClick={onSubmit}>
                Submit
            </Button>
            </div>
          </Form.Row>
        </Form>
      </Modal.Body>
      <Modal.Footer style={{fontSize: 10, height: 25, padding: 0, margin: 0}}>
        <div style={{margin: 'auto'}}>
          Are you a member? <Button style={{height: 20, fontSize: 12, padding: 0, margin: 0}} variant='link' onClick={() => convert(prev=>!prev)}> Sign In </Button>
        </div>
      </Modal.Footer>
    </Modal>

  );
}

export default SignInModal;