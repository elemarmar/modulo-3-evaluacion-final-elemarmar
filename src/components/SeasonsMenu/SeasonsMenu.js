import React from 'react';
import classes from './SeasonsMenu.module.css';
import Title from '../../assets/images/website-title.png';
import SeasonsList from './SeasonsList/SeasonsList';

const SeasonsMenu = (props) => {
  return (
    <>
      {/* <h1 className={classes.Title}>
        <img src={Title} />
      </h1> */}
      <SeasonsList handleFilter={props.handleFilter} />
    </>
  );
};

export default SeasonsMenu;
