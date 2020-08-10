import React from 'react';
import classes from './SeasonsMenu.module.css';
import SeasonsList from './SeasonsList/SeasonsList';
import PropTypes from 'prop-types';

const SeasonsMenu = (props) => {
  return (
    <section className={classes.Seasons}>
      <div className={classes.SeasonsText}>
        <h2 className={classes.Title}>Choose the season</h2>
        <p>
          This is a <strong>spoiler free</strong> website!
        </p>
        <span className={classes.Icon}></span>
        <p>
          In order to not get spoiled with characters that do not appear until
          later in the series, you can choose the season you are at and all
          characters will be filtered by that season. If you want to see all
          characters, choose season 4
        </p>
      </div>

      <SeasonsList handleFilter={props.handleFilter} />
    </section>
  );
};
SeasonsMenu.propTypes = {
  handleFilter: PropTypes.func,
};
export default SeasonsMenu;
