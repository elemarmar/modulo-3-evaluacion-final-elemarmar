import React from 'react';
import classes from './CharactersDone.module.css';

const CharactersDone = (props) => {
  return (
    <section className={classes.Missing}>
      <h6>You reached the end</h6>
      <p>Literally, no more characters to be shown.</p>
      <span className={classes.Icon}> </span>
    </section>
  );
};

export default CharactersDone;
