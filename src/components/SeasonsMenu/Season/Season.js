import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Season.module.css';
import video from '../../../assets/videos/seasons/first-season-promo.mp4';
import video2 from '../../../assets/videos/seasons/second-season-promo.mp4';
import video3 from '../../../assets/videos/seasons/third-season-promo.mp4';
import video4 from '../../../assets/videos/seasons/fourth-season-promo.mp4';

const Season = (props) => {
  const handleVideo = (ev) => {
    ev.currentTarget.pause();
  };

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
          <video
            className={classes.SeasonVideo}
            poster='https://i.imgur.com/Us5ckqm.jpg'
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            playsInline
            autoPlay
            muted
            loop
            poster='polina.jpg'
            id='bgvid'
          >
            <source src={video} type='video/mp4' />
          </video>
        </div>
      </Link>
    </>
  );
};

export default Season;
