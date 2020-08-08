import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MissingPage.module.css';

const MissingPage = (props) => {
  return (
    <section className={classes.Missing}>
      <h2>Hey you,</h2>
      <p>Where do you think you are going???</p>
      <p>The page you are looking for doesn't exist</p>
      <span className={classes.Icon}> </span>
      <p>some random quote</p>
      <Link to='/search'>Go back</Link>
    </section>
  );
};

export default MissingPage;
