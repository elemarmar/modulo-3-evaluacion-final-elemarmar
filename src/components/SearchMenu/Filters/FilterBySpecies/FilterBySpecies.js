import React from 'react';

const FilterBySpecies = (props) => {
  const handleSelect = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'species',
    });
  };
  return (
    <>
      <label for='species-select'>Choose a species:</label>
      <select
        name='species'
        id='species-select'
        onChange={handleSelect}
        value={props.speciesFilter}
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

export default FilterBySpecies;
