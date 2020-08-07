import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import Title from '../../assets/images/website-title.png';
import classes from './SearchMenu.module.css';
import '../../stylesheets/Background.scss'

const SearchMenu = (props) => {

    return (
    <>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <h1 className={classes.Title}><img src={Title}/></h1>
        <CharacterList />
    </>
    );
};


export default SearchMenu;