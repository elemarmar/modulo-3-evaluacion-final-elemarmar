import React from 'react';
import FilterByName from './FilterByName/FilterByName';
import classes from './Filters.module.css';
import FilterByGender from './FilterByGender/FilterByGender';
import FilterBySpecies from './FilterBySpecies/FilterBySpecies';
import FilterByStatus from './FilterByStatus/FilterByStatus';
import OrderName from './OrderName/OrderName';
import PropTypes from 'prop-types';

const Filters = (props) => {


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
      <OrderName orderCharacters={props.orderCharacters} ordered={props.filters.order}/>
    </form>
  );
};
Filters.propTypes = {
  handleFilter: PropTypes.func,
  orderCharacters: PropTypes.func,
  filters: PropTypes.object
};
export default Filters;
