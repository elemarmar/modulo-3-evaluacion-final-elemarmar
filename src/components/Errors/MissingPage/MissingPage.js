import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MissingPage.module.css';

const MissingPage = (props) => {
  return (
    <section className={classes.Missing}>
      <h2>Hey you,</h2>
      <h3>Where do you think you are going???</h3>
      <p>The page you are looking for <strong>doesn't exist</strong></p>
      <span className={classes.Icon}> </span>

      <Link className={classes.Link} to='/search'>Go back</Link>
    </section>
  );
};

export default MissingPage;
