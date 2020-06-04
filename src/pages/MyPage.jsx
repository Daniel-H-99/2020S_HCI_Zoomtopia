import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';

const MyPage = props => {
  return (
    <>
      <Header/>
      <Main>
        <div>This is MyPage</div>
        <div>You can check your offers</div>
      </Main>
    </>
  );
};

export default MyPage;
