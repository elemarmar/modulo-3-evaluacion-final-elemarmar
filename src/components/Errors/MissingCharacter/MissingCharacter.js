import React from 'react';
import classes from './MissingCharacter.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MissingCharacter = (props) => {
  return (
    <section className={classes.Missing}>
      <h2>Uh, problems...</h2>
      <p>
        No character with the id <strong>{props.missingId}</strong> was found
      </p>
      <span className={classes.Icon}> </span>
      <Link className={classes.Link} to='/search'>
        Go back
      </Link>
    </section>
  );
};

MissingCharacter.propTypes = {
  missingId: PropTypes.string,
};

export default MissingCharacter;
