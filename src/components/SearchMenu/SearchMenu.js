import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import classes from './SearchMenu.module.css';
import Filters from './Filters/Filters';
import '../../stylesheets/Background.scss';
import PropTypes from 'prop-types';

const SearchMenu = (props) => {

  const renderOrderedCharacters = (state) => {
if (props.filters.order) {
   return props.charactersData.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); 
    var nameB = b.name.toUpperCase(); 
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });
} else {
  return props.charactersData.sort(function (a, b) {
    return a.id - b.id;
  });
}

  }
  return (
    <section className={classes.SearchMenu}>
      <h2 className={classes.SeasonTitle}>Season {props.filters.season}</h2>
      <Filters handleFilter={props.handleFilter} filters={props.filters} orderCharacters={props.orderCharacters}/>
      <CharacterList
        charactersData={renderOrderedCharacters()}
        nameFilter={props.filters.name}
      />
    </section>
  );
};
SearchMenu.propTypes = {
  charactersData: PropTypes.array,
  orderCharacters: PropTypes.func,
  filters: PropTypes.object
};
export default SearchMenu;
