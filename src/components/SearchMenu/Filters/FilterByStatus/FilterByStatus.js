import React from 'react';

const FilterByStatus = (props) => {
  return (
    <>
      <input type='radio' id='alive' name='status' value='alive' checked />
      <label htmlFor='huey'>Huey</label>
      <input type='radio' id='huey' name='drone' value='huey' checked />
      <label htmlFor='huey'>Huey</label>
      {/* <select name='pets' id='pet-select'>
        <option value=''>--Please choose an option--</option>
        <option value='dog'>Dog</option>
        <option data-content="<i class='fa fa-address-book-o' aria-hidden='true'></i>Option1"></option>
      </select> */}
    </>
  );
};

export default FilterByStatus;
