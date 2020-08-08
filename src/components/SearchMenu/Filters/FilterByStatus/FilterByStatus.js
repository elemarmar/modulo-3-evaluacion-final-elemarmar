import React from 'react';

const FilterByStatus = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'status',
    });
  };
  return (
    <>
      <label for='status-select'>Choose status:</label>
      <select
        name='status'
        id='status-select'
        onChange={handleSelect}
        value={props.statusFilter}
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

export default FilterByStatus;
