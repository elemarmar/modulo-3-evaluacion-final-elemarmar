import React from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import classes from './CharacterList.module.css';
import CharactersDone from '../CharactersDone/CharactersDone';
import MissingCharacterByName from '../../Errors/MissingCharacterByName/MissingCharacterByName';

const CharacterList = (props) => {
  console.log(props.charactersData);
  const { charactersData } = props;

  const handleClick = () => {
    props.updatePage();
  };

  const renderCharacters = () => {
    return charactersData.map((character) => {
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
