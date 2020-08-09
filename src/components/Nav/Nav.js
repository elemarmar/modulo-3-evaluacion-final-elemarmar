import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Nav.module.css';

const Nav = (props) => {
  return (
    <nav>
      <ul className={classes.NavBar}>
        <li className={classes.IconHello}>
          <Link to='/'>Home</Link>
        </li>
        <li className={classes.IconSearch}>
          <Link to='/search'>Search</Link>
        </li>
        <li className={classes.IconSeason}>
          <Link to='/seasons'>Seasons</Link>
        </li>
        <li className={classes.IconAbout}>
          <Link to='/about'> About me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
