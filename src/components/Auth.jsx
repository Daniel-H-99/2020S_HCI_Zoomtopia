import React, { useState } from 'react';
import styled from 'styled-components';
import {Button, Modal ,Form} from 'react-bootstrap';
import { Route, Link } from 'react-router-dom';
import firebase from '../components/Firestore';
const db = firebase.firestore();
const findUserInDB = (email, password, callback) => {
  const query = db.collection('userID').where('Credential.email', '==', email).where('Credential.password', '==', password).limit(1);
  query.get().then(snapshot => {
  	const users = []
  	snapshot.forEach(doc => {
  		users.push(doc.id);
  	})
  	if (users.length > 0){
  		callback(users[0]);
  	} else {
  		callback(null);
  	}
  })
} 

const Auth = (props) => {
  var {email, pw, modalClose} = props.location?props.location.state:{};
  if (email == null) {
  	email = "";
  }
  if (pw == null) {
  	pw = "";
  }
  const {setUser, setAuthed} = props;
  const signInCallBack = (data) => {
  	if (data == null) {
  		props.history.push('/SignInModal');
  	} else {
      setUser(data);
      setAuthed(true);
      props.history.push('/');  		
  	}
  }
  findUserInDB(email, pw, signInCallBack);
  return null;
}


  export default Auth;