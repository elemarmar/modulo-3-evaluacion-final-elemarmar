import React from 'react';
import classes from './Landing.module.css';
import Title from '../../assets/images/website-title.png';
import { Link } from 'react-router-dom';
import './Background.scss'

const Landing = (props) => {

    return (
        <>
        <div className={classes.Landing}>
        <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
            <h1 className={classes.Title}><img src={Title}/></h1>
                <Link to="/seasons">
                    <div className={classes.LandingTv}></div>
                </Link>
        </div>

    </>
    );
};


export default Landing;