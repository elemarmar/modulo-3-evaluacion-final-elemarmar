import React from 'react';
import classes from './Season.module.css';
import video from '../../../assets/videos/seasons/first-season-promo.mp4';
import video2 from '../../../assets/videos/seasons/second-season-promo.mp4';
import video3 from '../../../assets/videos/seasons/third-season-promo.mp4';
import video4 from '../../../assets/videos/seasons/fourth-season-promo.mp4';

const Season = (props) => {

    const handleVideo = (ev) => {
        console.log(ev);
        ev.currentTarget.pause();
    }

    return (
        <>
        <p>Choose a season</p>
        <div className={classes.Season}>
            <h2>Season 1</h2>
            <video className={classes.SeasonVideo}   poster="https://i.imgur.com/Us5ckqm.jpg"
  onMouseOver={event => event.target.play()}
  onMouseOut={event => event.target.pause()}playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
                <source src={video} type="video/mp4" />
            </video>
        </div>
        <div className={classes.Season}>
            <h2>Season 2</h2>
            <video className={classes.SeasonVideo} playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
                <source src={video2} type="video/mp4" />
            </video>
        </div>
        <div className={classes.Season}>
            <h2>Season 3</h2>
            <video className={classes.SeasonVideo} playsInline autoPlay muted loop poster="polina.jpg" id="bgvid">
                <source src={video3} type="video/mp4" />
            </video>
        </div>
        <div className={classes.Season}>
            <h2>Season 4</h2>
            <video className={classes.SeasonVideo}   playsInline autoPlay   poster="https://i.imgur.com/Us5ckqm.jpg"
  onMouseOver={handleVideo}
  onMouseOut={event => event.target.play()} 
muted loop poster="polina.jpg" id="bgvid">
                <source src={video4} type="video/mp4" />
            </video>
        </div>
        </>
    );
};


export default Season;