import React from 'react';
import ItemInfoForm from '../components/ItemInfoForm';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ItemInfo = props => {
  return (
    <>
        <ItemInfoForm userID={props.user}/>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <Link to="/MyPage">
              <Button>Go to My Page</Button>  
          </Link>
        </div>
    </>
  );
};

export default ItemInfo;
