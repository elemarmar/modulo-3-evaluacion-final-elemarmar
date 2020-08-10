import React from 'react';
import classes from './OrderName.module.css';

const OrderName = (props) => {
  const handleInput = (ev) => {
    console.log(ev.target.checked);
    props.orderCharacters(ev.target.checked);
    // if checked --> sort alphabetically
    // if not checked --> sort by id
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
