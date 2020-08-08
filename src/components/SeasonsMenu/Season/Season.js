import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Season.module.css';
import video1 from '../../../assets/videos/seasons/first-season-promo.mp4';
import video2 from '../../../assets/videos/seasons/second-season-promo.mp4';
import video3 from '../../../assets/videos/seasons/third-season-promo.mp4';
import video4 from '../../../assets/videos/seasons/fourth-season-promo.mp4';

const videos = [video1, video2, video3, video4];

const Season = (props) => {
  const handleClick = (ev) => {
    props.handleFilter({
      value: props.seasonId,
      key: 'season',
    });
  };
  return (
    <>
      <Link to='/search' onClick={handleClick}>
        <div className={classes.Season}>
          <h3 className={classes.SeasonNumber}>Season {props.seasonId}</h3>
          <video
            className={classes.SeasonVideo}
            poster='https://i.imgur.com/Us5ckqm.jpg'
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            playsInline
            // autoPlay
            muted
            loop
            poster='polina.jpg'
            id='bgvid'
          >
            <source src={videos[props.seasonId - 1]} type='video/mp4' />
          </video>
        </div>
      </Link>
    </>
  );
};

export default Season;
