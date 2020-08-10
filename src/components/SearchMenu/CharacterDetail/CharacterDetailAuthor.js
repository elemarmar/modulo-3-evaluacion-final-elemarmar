import React from 'react';
import classes from './CharacterDetailAuthor.module.css';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/images/author-portrait.png';
import PropTypes from 'prop-types';




const CharacterDetailAuthor = (props) => {

  const renderCharacter = () => {
        return (
          <>
            <div className={classes.FlipContainer}>
              <div className={classes.Flipper}>
                <div className={classes.Front}>
                  <div className={classes.CharacterCard}>

                    <img
                      src={avatar}
                      className={classes.CharacterPic}
                      alt={props.character.name}
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
                      <strong><i className="fas fa-venus"></i></strong> {props.character.gender}
                    </p>
                    <p>
                      <strong><i className="fas fa-map-marker-alt"></i></strong> {props.character.origin.name}
                    </p>
                    <p className={classes.Description}>{props.character.description}</p>
                    <a rel="noopener noreferrer" className={classes.github} href="https://github.com/elemarmar" target="_blank" title="Go to Elena's Github"><i className="fab fa-github"></i></a>
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
CharacterDetailAuthor.propTypes = {
  character: PropTypes.object,
};
export default CharacterDetailAuthor;
