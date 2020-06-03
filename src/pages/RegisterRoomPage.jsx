import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import RegisterForm from '../components/RegisterForm';

const RegisterRoomPage = props => {
  return (
    <>
      <Header/>
      <Main>
        <RegisterForm/>
      </Main>
    </>
  );
};

export default RegisterRoomPage;
