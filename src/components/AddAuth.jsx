import React, { useState } from 'react';
import styled from 'styled-components';
import {Button, Modal ,Form} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import firebase from '../components/Firestore';

const db = firebase.firestore();
const addUserDB = (email, name, password, callback) => {
  const userObj = {Credential: {email: email, name: name, password: password}};
  db.collection('userID').doc(email).set(userObj).then(ref => {
    callback(ref);
  });
}
const AddAuth = (props) => {
  const {email, name, pw} = props.location.state;
  console.log(email, name, pw);
  /*
  if (email == null)||(name == null)||(password == null) {
    props.history.push("/")
  }*/
  const addCallBack = (e) => {
    props.history.push("/");
  }
  addUserDB(email, name, pw, addCallBack);
  return null;
}


export default AddAuth;