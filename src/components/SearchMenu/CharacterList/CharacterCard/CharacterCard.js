import React from 'react';
import classes from './CharacterCard.module.css';

const randomN = () => {
    return Math.random();
}

console.log(randomN());
const CharacterCard = (props) => {
    const divStyle = {
        backgroundImage: 'url(' + props.pic + ')',
        animationDelay: randomN() + 's',
    }

    return (
        <article style={divStyle} className={classes.CharacterCard}>
            <span className={classes.CharacterPic}></span>
            <h4>{props.name}</h4>
        </article>
    );
};


export default CharacterCard;