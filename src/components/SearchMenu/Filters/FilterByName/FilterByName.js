import React from 'react';
import classes from './FilterByName.module.scss';
import PropTypes from 'prop-types';

const Filters = (props) => {
  const handleInput = (ev) => {
    ev.preventDefault();
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  return (
    <div className={classes.search}>
      <input type='text' onChange={handleInput} value={props.nameFilter} />
    </div>
  );
};
Filters.propTypes = {
  handleFilter: PropTypes.func,
  nameFilter: PropTypes.string,
};
export default Filters;
