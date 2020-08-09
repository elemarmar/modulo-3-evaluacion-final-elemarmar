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

  return (
    <>
      <div className={classes.CharacterList}>
        {props.nameFilter && charactersData.length > 0 ? (
          renderCharacters()
        ) : (
          <MissingCharacterByName nameFilter={props.nameFilter} />
        )}
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
