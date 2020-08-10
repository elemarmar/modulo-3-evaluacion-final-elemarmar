import React from 'react';
import classes from '../../../../stylesheets/SelectControls.module.css';
import PropTypes from 'prop-types';

const FilterByGender = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'gender',
    });
  };
  return (
    <>
      <label htmlFor='gender-select'>Choose gender:</label>
      <select
        className={classes.selectControl}
        name='gender'
        id='gender-select'
        onChange={handleSelect}
        defaultValue={props.genderFilter}
      >
        <option value='All'>All</option>
        <option value='Female'>Female</option>
        <option value='Male'>Male</option>
        <option value='Genderless'>Genderless</option>
        <option value='unkown'>unkown</option>
      </select>
    </>
  );
};
FilterByGender.propTypes = {
  handleFilter: PropTypes.func,
  genderFilter: PropTypes.string,
};
export default FilterByGender;
