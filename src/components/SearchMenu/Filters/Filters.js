import React from 'react';
import FilterByName from './FilterByName/FilterByName';
import classes from './Filters.module.css';
import FilterByGender from './FilterByGender/FilterByGender';
import FilterBySpecies from './FilterBySpecies/FilterBySpecies';
import FilterByStatus from './FilterByStatus/FilterByStatus';
import FilterByLocation from './FilterByLocation/FilterByLocation';

const Filters = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  return (
    <form className={classes.Filters}>
      <FilterByName
        handleFilter={props.handleFilter}
        nameFilter={props.nameFilter}
      />
      <FilterByGender handleFilter={props.handleFilter} />
      <FilterBySpecies handleFilter={props.handleFilter} />
      <FilterByStatus handleFilter={props.handleFilter} />
      {/* <FilterByLocation /> */}
    </form>
  );
};

export default Filters;
