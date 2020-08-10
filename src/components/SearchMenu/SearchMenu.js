import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import classes from './SearchMenu.module.css';
import Filters from './Filters/Filters';
import '../../stylesheets/Background.scss';

const SearchMenu = (props) => {

  const renderOrderedCharacters = (state) => {
    console.log('se inicia');
if (props.filters.order) {
  console.log('por nombre');
   return props.charactersData.sort(function(a, b) {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
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
  console.log('por id');
  return props.charactersData.sort(function (a, b) {
    return a.id - b.id;
  });

}

  }
  console.log(props.charactersData);
  return (
    <section className={classes.SearchMenu}>
      <h2 className={classes.SeasonTitle}>Season {props.filters.season}</h2>
      <Filters handleFilter={props.handleFilter} filters={props.filters} orderCharacters={props.orderCharacters}/>
      <CharacterList
        charactersData={renderOrderedCharacters()}
        updatePage={props.updatePage}
        pageNumber={props.pageNumber}
        nameFilter={props.filters.name}
      />
    </section>
  );
};

export default SearchMenu;
