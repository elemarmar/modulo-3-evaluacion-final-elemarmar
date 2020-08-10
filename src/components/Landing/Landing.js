import React from 'react';
import classes from './Landing.module.css';

import { Link } from 'react-router-dom';
import '../../stylesheets/Background.scss';

const Landing = (props) => {
  return (
    <>
      <div className={classes.Landing}>
        <Link to='/seasons'>
          <div className={classes.LandingTv}></div>
        </Link>
      </div>
    </>
  );
};

export default Landing;
