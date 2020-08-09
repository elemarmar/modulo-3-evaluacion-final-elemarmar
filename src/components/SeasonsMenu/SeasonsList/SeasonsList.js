import React from 'react';
import classes from './SeasonsList.module.css';
import Season from '../Season/Season';
import data from '../../../data/seasons.json';

const SeasonsList = (props) => {
  const renderSeasons = () => {
    return data.map((season) => {
      return (
        <Season
          key={season.id}
          seasonId={season.id}
          handleFilter={props.handleFilter}
        />
      );
    });
  };
  return (
    <>
      <div className={classes.Season}>
        <section className={classes.SeasonsList}>{renderSeasons()}</section>
      </div>
    </>
  );
};

export default SeasonsList;
