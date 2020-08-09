import React, { useEffect, useState } from 'react';
import classes from './CharacterDetail.module.css';
import { Link } from 'react-router-dom';
import Api from '../../../services/getDataFromApi';
import MissingCharacter from '../../../components/Errors/MissingCharacter/MissingCharacter';

const CharacterDetail = (props) => {
  const [foundCharacter, setFoundCharacter] = useState('');

  useEffect(() => {
    Api.id(props.characterId)
      .then((data) => {
        console.log('data', data);
        setFoundCharacter(data);
      })
      .then(() => {
        console.log('second', foundCharacter);
      });
  }, [props.characterId]);

  const renderCharacter = () => {
    if (foundCharacter) {
      if (foundCharacter.error) {
        console.log('foundCharacter da error');
        return <MissingCharacter missingId={props.characterId} />;
      } else {
        console.log('foundCharacter existe');
        return (
          <section className={classes.CharacterDetail}>
            <div className={classes.CharacterAvatar}>
              <img className={classes.Avatar} src={foundCharacter.image} />
            </div>
            <div className={classes.CharacterInfo}>
              <h2 className={classes.CharacterName}>{foundCharacter.name}</h2>
              <p>
                <strong>Status:</strong> {foundCharacter.status}
              </p>
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
      }
    } else {
      return <p>LOADING</p>;
    }
  };

  return <>{renderCharacter()}</>;
};

export default CharacterDetail;
