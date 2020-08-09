import React, { useState } from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import classes from './CharacterList.module.css';
import CharactersDone from '../CharactersDone/CharactersDone';
import MissingCharacterByName from '../../Errors/MissingCharacterByName/MissingCharacterByName';

const CharacterList = (props) => {
  const [shownCharacters, setShownCharacters] = useState(20);
  const { charactersData } = props;

  charactersData.sort(function (a, b) {
    return a.id - b.id;
  });

  const filterData = () => {
    console.log(props.nameFilter);
    if (props.nameFilter) {
      console.log('hello');
      return charactersData.slice(0);
    } else {
      console.log('bye');
      return charactersData.slice(0, shownCharacters);
    }
  };

  const handleClick = () => {
    setShownCharacters(shownCharacters + 20);
  };

  const renderCharacters = () => {
    return filterData().map((character) => {
      return (
        <CharacterCard
          key={character.id}
          id={character.id}
          name={character.name}
          pic={character.image}
        />
      );
    });
  };

  const renderBtn = () => {
    if (props.nameFilter) {
      return <p>Nothing to see here</p>;
    } else if (props.pageNumber === 30) {
      return <CharactersDone />;
    } else {
      return (
        <button className={classes.Btn} onClick={handleClick}>
          Load more
        </button>
      );
    }
  };

  return (
    <>
      <div className={classes.CharacterList}>
        {props.charactersData ? renderCharacters() : <p>Loading</p>}
      </div>
      {renderBtn()}
    </>
  );
};

export default CharacterList;

{
  /* <MissingCharacterByName nameFilter={props.nameFilter} /> */
}
