import React from 'react';
import classes from './OrderName.module.css';
import PropTypes from 'prop-types';

const OrderName = (props) => {
  const handleInput = (ev) => {
    props.orderCharacters(ev.target.checked);
  };

  return (
    <>
      <div className={classes.OrderName}>
        <input
          id='order-checkbox'
          type='checkbox'
          onChange={handleInput}
          defaultChecked={props.ordered}
        />
        Order by name
        <label htmlFor='order-checkbox'>Order by name</label>
      </div>
    </>
  );
};
OrderName.propTypes = {
  orderCharacters: PropTypes.func,
};
export default OrderName;
