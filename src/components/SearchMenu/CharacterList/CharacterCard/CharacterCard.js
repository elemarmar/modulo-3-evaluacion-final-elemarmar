import React from 'react';
import classes from './CharacterCard.module.css';
import { Link } from 'react-router-dom';

const randomN = () => {
  return Math.random();
};

const CharacterCard = (props) => {
  console.log(props);
  const divStyle = {
    backgroundImage: 'url(' + props.pic + ')',
    animationDelay: randomN() + 's',
  };

  return (
    <Link to={`/search/${props.id}`}>
      <article style={divStyle} className={classes.CharacterCard}>
        <span className={classes.CharacterPic}></span>
        <h4>{props.name}</h4>
      </article>
    </Link>
  );
};

export default CharacterCard;
