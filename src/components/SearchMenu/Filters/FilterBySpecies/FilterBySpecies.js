import React from 'react';
import classes from '../../../../stylesheets/SelectControls.module.css';
import PropTypes from 'prop-types';

const FilterBySpecies = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'species',
    });
  };
  return (
    <>
      <label htmlFor='species-select'>Choose a species:</label>
      <select
        name='species'
        className={classes.selectControl}
        id='species-select'
        onChange={handleSelect}
        defaultValue={props.speciesFilter}
      >
        <option value='All'>All</option>
        <option value='Human'>Human</option>
        <option value='Animal'>Animal</option>
        <option value='Alien'>Alien</option>
        <option value='Humanoid'>Humanoid</option>
        <option value='Vampire'>Vampire</option>
      </select>
    </>
  );
};
FilterBySpecies.propTypes = {
  handleFilter: PropTypes.func,
  speciesFilter: PropTypes.string,
};
export default FilterBySpecies;
