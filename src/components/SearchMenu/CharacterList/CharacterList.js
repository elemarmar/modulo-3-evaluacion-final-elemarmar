import React from 'react';
import CharacterCard from './CharacterCard/CharacterCard';
import classes from './CharacterList.module.css';

const CharacterList = (props) => {
    
    const { charactersData } = props;

    const renderCharacters = () => {
        return charactersData.map(character => {
            return <CharacterCard key={character.id} name={character.name} pic={character.image} />
        });
    }


    

    return (<div className={classes.CharacterList}>
                {charactersData ? renderCharacters() : <p>Loading</p>}
                {/* {renderCharacters} */}
            </div>);
};


export default CharacterList;