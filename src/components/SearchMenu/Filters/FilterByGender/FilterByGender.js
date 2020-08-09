import React from 'react';
import classes from '../../../../stylesheets/SelectControls.module.css';

const FilterByGender = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'gender',
    });
  };
  return (
    <>
      <label for='gender-select'>Choose gender:</label>
      <select
        className={classes.selectControl}
        name='gender'
        id='gender-select'
        onChange={handleSelect}
        value={props.genderFilter}
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

export default FilterByGender;
