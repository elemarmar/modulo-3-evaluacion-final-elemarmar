import React from 'react';
import classes from './SeasonsList.module.css';
import Season from '../Season/Season';
import data from '../../../data/seasons.json';

const SeasonsList = (props) => {
  const renderSeasons = () => {
    return data.map((season) => {
      return <Season seasonId={season.id} handleFilter={props.handleFilter} />;
    });
  };
  return (
    <>
      <p>Choose a season</p>
      <div className={classes.Season}>
        <h2>Season {props.seasonId}</h2>);
        <section className={classes.SeasonsList}>{renderSeasons()}</section>
      </div>
    </>
  );
};

export default SeasonsList;
