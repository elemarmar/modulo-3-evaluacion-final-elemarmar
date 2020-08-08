import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import classes from './SearchMenu.module.css';
import Filters from './Filters/Filters';
import '../../stylesheets/Background.scss';

const SearchMenu = (props) => {
  return (
    <section className={classes.SearchMenu}>
      <h2 className={classes.SeasonTitle}>Season {props.seasonFilter}</h2>
      <Filters
        handleFilter={props.handleFilter}
        nameFilter={props.nameFilter}
        speciesFilter={props.speciesFilter}
        genderFilter={props.genderFilter}
        statusFilter={props.statusFilter}
      />
      <CharacterList
        charactersData={props.charactersData}
        updatePage={props.updatePage}
        pageNumber={props.pageNumber}
      />
    </section>
  );
};

export default SearchMenu;
