import React from 'react';
import classes from '../../../../stylesheets/SelectControls.module.css';
import PropTypes from 'prop-types';

const FilterByStatus = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'status',
    });
  };
  return (
    <>
      <label htmlFor='status-select'>Choose status:</label>
      <select
        name='status'
        className={classes.selectControl}
        id='status-select'
        onChange={handleSelect}
        defaultValue={props.statusFilter}
      >
        <option value='All'>All</option>
        <option value='Alive'>Alive</option>
        <option value='Dead'>Dead</option>
        <option value='unknown'>unkown</option>
      </select>
    </>
  );
};
FilterByStatus.propTypes = {
  handleFilter: PropTypes.func,
  statusFilter: PropTypes.string,
};
export default FilterByStatus;
