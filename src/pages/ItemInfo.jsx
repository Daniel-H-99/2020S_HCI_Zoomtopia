import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import ItemInfoForm from '../components/ItemInfoForm';

const ItemInfo = props => {
  return (
    <>
      <Header/>
      <Main>
        <div>Current page show no data</div>
        <div>It will be replaced to actual data placeholder</div>
        <ItemInfoForm userID="user4"/>
      </Main>
    </>
  );
};

export default ItemInfo;
