import React from 'react';
import classes from './MissingCharacterByName.module.css';
import { Link } from 'react-router-dom';

const MissingCharacterByName = (props) => {
  return (
    <section className={classes.Missing}>
      <h2>Hah, did you really think...</h2>
      <p>
        there could be somebody with the name of{' '}
        <strong>{props.nameFilter}</strong>??
      </p>
      <span className={classes.Icon}> </span>
      <p>some random quote</p>
    </section>
  );
};

export default MissingCharacterByName;