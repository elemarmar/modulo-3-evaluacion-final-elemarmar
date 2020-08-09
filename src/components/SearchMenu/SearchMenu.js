import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import classes from './SearchMenu.module.css';
import Filters from './Filters/Filters';
import '../../stylesheets/Background.scss';

const SearchMenu = (props) => {
  return (
    <section className={classes.SearchMenu}>
      <h2 className={classes.SeasonTitle}>Season {props.filters.season}</h2>
      <Filters handleFilter={props.handleFilter} filters={props.filters} />
      <CharacterList
        charactersData={props.charactersData}
        updatePage={props.updatePage}
        pageNumber={props.pageNumber}
        nameFilter={props.filters.name}
      />
    </section>
  );
};

export default SearchMenu;
