import React from 'react';
import classes from './CharacterCard.module.css';

const CharacterCard = (props) => {

    return (
        <article className={classes.CharacterCard}>
            <span className={classes.CharacterPic}></span>
            <h4>Morty Sánchez</h4>
        </article>
    );
};


export default CharacterCard;