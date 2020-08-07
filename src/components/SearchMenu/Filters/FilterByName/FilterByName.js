import React from 'react';
import classes from './FilterByName.module.scss';

const Filters = (props) => {
    const handleInput = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
          });
    }

    return (<div className={classes.search} >
        <input type="text" onChange={handleInput} value={props.nameFilter}/>
        </div>)
}

export default Filters;