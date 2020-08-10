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
          Choose the season and you'll only see characters that appear up to that season! If you choose season 4, you'll see all characters.
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
