import React from 'react';
import classes from './CharacterCard.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const randomN = () => {
  return Math.random();
};

const CharacterCard = (props) => {
  const divStyle = {
    animationDelay: randomN() + 's',
  };

  const picStyle = {
    backgroundImage: 'url(' + props.pic + ')',
  }

  return (
    <Link to={`/search/${props.id}`}>
      <article style={divStyle} className={classes.CharacterCard}>
        <div style={picStyle} className={classes.CharacterCardContainer}>
        <span  className={classes.CharacterPic}></span>
        <h4>{props.name}</h4>
        </div>
      </article>
    </Link>
  );
};
CharacterCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  pic: PropTypes.string,
  status: PropTypes.string
};
export default CharacterCard;
