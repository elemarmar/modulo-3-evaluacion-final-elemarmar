import React from 'react';

const Filters = (props) => {
    const handleInput = (ev) => {
        console.log(ev.target.value);
    }

    return (
            <form>
                <input type="text" onChange={handleInput}/>
            </form>
    )
}

export default Filters;