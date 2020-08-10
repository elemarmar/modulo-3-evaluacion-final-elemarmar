import React, { useEffect, useState } from 'react';
import classes from './CharacterDetailAuthor.module.css';
import { Link } from 'react-router-dom';




const CharacterDetailAuthor = (props) => {

  const renderCharacter = () => {
        return (
          <>
            <div className={classes.FlipContainer}>
              <div className={classes.Flipper}>
                <div className={classes.Front}>
                  <div className={classes.CharacterCard}>

                    <img
                      src={props.character.image}
                      className={classes.CharacterPic}
                    ></img>
                                      <p className={classes.Status}>
                        {props.character.status}
                    </p>
                    <div className={classes.CharacterName}>
                      <h4>{props.character.name}</h4>
                      <p>Front-end developer</p>
                    </div>
                  </div>
                </div>
                <div className={classes.Back}>
                  <div className={classes.CharacterInfo}>
                  <div className={classes.CharacterNameBack}>
                      <h4>{props.character.name}</h4>
                    </div>
                    <p>
                      <strong>Species:</strong> {props.character.species}
                    </p>
                    <p>
                      <strong><i class="fas fa-venus"></i></strong> {props.character.gender}
                    </p>
                    <p>
                      <strong><i class="fas fa-map-marker-alt"></i></strong> {props.character.origin.name}
                    </p>
                    <p className={classes.Description}>{props.character.description}</p>
                    <a className={classes.github} href="https://github.com/elemarmar" target="_blank" title="Go to Elena's Github"><i class="fab fa-github"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <ul className={classes.Links}>
              <li>
                <Link className={classes.Link} to='/search'>
                  Go back
                </Link>
              </li>
            </ul>
          </>
        );
  };

  return <>{renderCharacter()}</>;
};

export default CharacterDetailAuthor;
