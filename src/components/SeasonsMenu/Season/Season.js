import React from 'react';
import classes from './Season.module.css';
import video from '../../../assets/videos/seasons/first-season-promo.mp4';

const Season = (props) => {

    return (
        <div className={classes.Season}>
            <h2>Season 1</h2>
            <video className={classes.SeasonVideo} playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};


export default Season;