import React from 'react';

const Filters = (props) => {
    const handleInput = (ev) => {
        props.handleFilter({
            value: ev.target.value,
            key: 'name'
          });
    }

    return (
            <form>
                <input type="text" onChange={handleInput}/>
            </form>
    )
}

export default Filters;