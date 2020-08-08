import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import Title from '../../assets/images/website-title.png';
import classes from './SearchMenu.module.css';
import Filters from './Filters/Filters';
import '../../stylesheets/Background.scss';

const SearchMenu = (props) => {
  return (
    <section className={classes.SearchMenu}>
      <h2>Season 4</h2>
      <Filters
        handleFilter={props.handleFilter}
        nameFilter={props.nameFilter}
      />
      <CharacterList charactersData={props.charactersData} />
    </section>
  );
};

export default SearchMenu;
