import React from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import classes from './CharacterList.module.css';
import CharactersDone from '../CharactersDone/CharactersDone';

const CharacterList = (props) => {
  console.log(props.pageNumber);
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

  return (
    <>
      <div className={classes.CharacterList}>
        {charactersData ? renderCharacters() : <p>Loading</p>}
        {/* {renderCharacters} */}
      </div>
      {props.pageNumber === 30 ? (
        <CharactersDone />
      ) : (
        <button onClick={handleClick}>Load more</button>
      )}
    </>
  );
};

export default CharacterList;
