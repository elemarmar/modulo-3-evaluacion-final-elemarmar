import React from 'react';
import classes from './CharacterDetail.module.css';

const CharacterDetail = (props) => {
  return (
    <section className={classes.CharacterDetail}>
      <h2>{props.character.name}</h2>
      <img src={props.character.image} />
      <div>
        <p>{props.character.status}</p>
        <p>{props.character.species}</p>
        <p>{props.character.gender}</p>
        <p>{props.character.origin.name}</p>
        <p>Episodes: {props.character.episode.length}</p>
      </div>
    </section>
  );
};

export default CharacterDetail;
