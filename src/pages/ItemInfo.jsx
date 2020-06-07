import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import ItemInfoForm from '../components/ItemInfoForm';

const ItemInfo = props => {
  return (
    <>
      <Header/>
      <Main>
        <ItemInfoForm userID="user4"/>
      </Main>
    </>
  );
};

export default ItemInfo;
