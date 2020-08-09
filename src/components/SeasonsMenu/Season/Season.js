import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Season.module.css';
import video1 from '../../../assets/videos/seasons/season1.mp4';
import video2 from '../../../assets/videos/seasons/season2.mp4';
import video3 from '../../../assets/videos/seasons/season3.mp4';
import video4 from '../../../assets/videos/seasons/season4.mp4';
import poster1 from '../../../assets/videos/seasons/poster1.png';
import poster2 from '../../../assets/videos/seasons/poster2.png';
import poster3 from '../../../assets/videos/seasons/poster3.png';
import poster4 from '../../../assets/videos/seasons/poster4.png';

const videos = [video1, video2, video3, video4];
const posters = [poster1, poster2, poster3, poster4];

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
            poster={posters[props.seasonId - 1]}
            onMouseOver={(event) => event.currentTarget.play()}
            onMouseOut={(event) => event.currentTarget.pause()}
            playsInline
            // autoPlay
            muted
            loop
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
