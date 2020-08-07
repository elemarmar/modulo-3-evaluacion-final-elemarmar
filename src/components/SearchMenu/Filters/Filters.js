import React from 'react';
import FilterByName from './FilterByName/FilterByName';
import classes from './Filters.module.css';

const Filters = (props) => {
    const handleInput = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
          });
    }

    return (
            <form className={classes.Filters}>
                <FilterByName handleFilter={props.handleFilter} nameFilter={props.nameFilter}/>
            </form>
    )
}

export default Filters;