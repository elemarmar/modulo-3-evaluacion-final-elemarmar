import React, { useEffect, useState } from 'react';
import classes from './CharacterDetail.module.css';
import { Link } from 'react-router-dom';
import Api from '../../../services/getDataFromApi';
import MissingCharacter from '../../../components/Errors/MissingCharacter/MissingCharacter';
import Loader from '../../UI/Loader/Loader';
import './status.css';
import PropTypes from 'prop-types';


const CharacterDetail = (props) => {
  const [foundCharacter, setFoundCharacter] = useState('');

  useEffect(() => {
    Api.id(props.characterId)
      .then((data) => {
        setFoundCharacter(data);
      })
  }, [props.characterId]);

  const renderCharacter = () => {
    if (foundCharacter) {
      if (foundCharacter.error) {
        return <MissingCharacter missingId={props.characterId} />;
      } else {
        return (
          <>
            <div className={classes.FlipContainer}>
              <div className={classes.Flipper}>
                <div className={classes.Front}>
                  <div className={classes.CharacterCard}>
                    <img
                      src={foundCharacter.image}
                      className={classes.CharacterPic}
                      alt={foundCharacter.name}
                    ></img>
                 <p className={`${classes.Status} ${foundCharacter.status}`}>
                        {foundCharacter.status}
                    </p>
                    <div className={classes.CharacterName}>
                      <h4>{foundCharacter.name}</h4>
                    </div>
                  </div>
                </div>
                <div className={`${classes.Back} ${foundCharacter.status}`}>
                  <div className={classes.CharacterInfo}>
                    <h2 className={classes.CharacterName}>
                      {foundCharacter.name}
                    </h2>
                    <p>
                      <strong>Species:</strong> {foundCharacter.species}
                    </p>
                    <p>
                      <strong>Gender:</strong> {foundCharacter.gender}
                    </p>
                    <p>
                      <strong>Origin:</strong> {foundCharacter.origin.name}
                    </p>
                    <p>
                      <strong>Episodes:</strong> {foundCharacter.episode.length}
                    </p>
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
      }
    } else {
      return <Loader />;
    }
  };

  return <>{renderCharacter()}</>;
};

CharacterDetail.propTypes = {
  characterId: PropTypes.string,
};
export default CharacterDetail;
