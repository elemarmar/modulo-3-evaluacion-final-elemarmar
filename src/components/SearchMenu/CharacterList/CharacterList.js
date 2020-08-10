import React, { useState } from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import classes from './CharacterList.module.css';
import CharactersDone from '../CharactersDone/CharactersDone';
import MissingCharacterByName from '../../Errors/MissingCharacterByName/MissingCharacterByName';
import Loader from '../../UI/Loader/Loader';
import PropTypes from 'prop-types';

const CharacterList = (props) => {
  const [shownCharacters, setShownCharacters] = useState(20);
  const { charactersData } = props;



  const filterData = () => {
    if (props.nameFilter) {
      return charactersData.slice(0);
    } else {
      return charactersData.slice(0, shownCharacters);
    }
  };

  const handleClick = () => {
      setShownCharacters(shownCharacters + 20);

  };

  const renderCharacters = () => {
    if (charactersData.length > 0) {
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
    } else {
      return <MissingCharacterByName name={props.nameFilter}/>
    }
  };

  const renderBtn = () => {
    if (props.nameFilter) {
      return null;
    } else if (shownCharacters === 600) {
      return <CharactersDone />
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
        {props.charactersData ? renderCharacters() : <Loader />}
      </div>
      {renderBtn()}
    </>
  );
};
CharacterList.propTypes = {
  charactersData: PropTypes.array,
  nameFilter: PropTypes.string,
};
export default CharacterList;
