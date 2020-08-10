import React from 'react';
import classes from './MissingCharacterByName.module.css';
import PropTypes from 'prop-types';

const MissingCharacterByName = (props) => {
  return (
    <section className={classes.Missing}>
      <h2>Hah, did you really think...</h2>
      <p>
        there could be somebody with the name of <strong>{props.name}</strong>{' '}
        and those characteristics??
        <strong>{props.nameFilter}</strong>??
      </p>
      <span className={classes.Icon}> </span>
    </section>
  );
};

MissingCharacterByName.propTypes = {
  name: PropTypes.string,
  nameFilter: PropTypes.string,
};

export default MissingCharacterByName;
