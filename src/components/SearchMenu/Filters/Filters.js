import React from 'react';
import FilterByName from './FilterByName/FilterByName';
import classes from './Filters.module.css';
import FilterByGender from './FilterByGender/FilterByGender';
import FilterBySpecies from './FilterBySpecies/FilterBySpecies';
import FilterByStatus from './FilterByStatus/FilterByStatus';

const Filters = (props) => {
  const handleInput = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'name',
    });
  };

  return (
    <form className={classes.Filters} onSubmit={(ev) => ev.preventDefault()}>
      <FilterByName
        handleFilter={props.handleFilter}
        nameFilter={props.filters.name}
      />
      <FilterByGender
        handleFilter={props.handleFilter}
        genderFilter={props.filters.gender}
      />
      <FilterBySpecies
        handleFilter={props.handleFilter}
        speciesFilter={props.filters.species}
      />
      <FilterByStatus
        handleFilter={props.handleFilter}
        statusFilter={props.filters.status}
      />
    </form>
  );
};

export default Filters;
