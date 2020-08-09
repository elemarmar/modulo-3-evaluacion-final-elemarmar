import React from 'react';
import classes from './CharacterDetail.module.css';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <section className={classes.CharacterDetail}>
      <div className={classes.CharacterAvatar}>
        <img className={classes.Avatar} src={props.character.image} />
      </div>
      <div className={classes.CharacterInfo}>
        <h2 className={classes.CharacterName}>{props.character.name}</h2>
        <p>
          <strong>Status:</strong> {props.character.status}
        </p>
        <p>
          <strong>Species:</strong> {props.character.species}
        </p>
        <p>
          <strong>Gender:</strong> {props.character.gender}
        </p>
        <p>
          <strong>Origin:</strong> {props.character.origin.name}
        </p>
        <p>
          <strong>Episodes:</strong> {props.character.episode.length}
        </p>
      </div>

      <div className={classes.CharacterQuotes}>
        <p>This is a random wuote</p>
      </div>
      <ul className={classes.Links}>
        <li>
          <Link className={classes.Link} to='/search'>
            Go back
          </Link>
        </li>
        <li>
          <Link className={classes.Link} to='/search'>
            Next
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default CharacterDetail;
