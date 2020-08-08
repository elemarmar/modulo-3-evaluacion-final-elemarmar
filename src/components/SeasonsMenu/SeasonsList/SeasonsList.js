import React from 'react';
import classes from './SeasonsList.module.css';
import Season from '../Season/Season';
import data from '../../../data/seasons.json';

const SeasonsList = (props) => {
  console.log(data);
  const renderSeasons = () => {
    return data.map((season) => {
      return <Season seasonId={season.id} />;
    });
  };
  return <section className={classes.SeasonsList}>{renderSeasons()}</section>;
};

export default SeasonsList;
