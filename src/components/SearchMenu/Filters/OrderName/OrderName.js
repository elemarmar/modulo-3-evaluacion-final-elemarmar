import React from 'react';
import classes from './OrderName.module.css';

const OrderName = (props) => {
  const handleInput = (ev) => {
    props.orderCharacters(ev.target.checked);
  };

  return (
    <>
      <div className={classes.OrderName}>
        <input id='order-checkbox' type='checkbox' onChange={handleInput} />
        Order by name
        <label htmlFor='order-checkbox'>Order by name</label>
      </div>
    </>
  );
};

export default OrderName;
