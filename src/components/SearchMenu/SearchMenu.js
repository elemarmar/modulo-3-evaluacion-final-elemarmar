import React from 'react';
import CharacterList from './CharacterList/CharacterList';
import Title from '../../assets/images/website-title.png';
import classes from './SearchMenu.module.css';
import Filters from './Filters/Filters';
import '../../stylesheets/Background.scss'

const SearchMenu = (props) => {

    return (
    <>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <section className={classes.SearchMenu}>
            <h1 className={classes.Title}><img src={Title}/></h1>
            <Filters />
            <CharacterList charactersData={props.charactersData}/>
        </section>
    </>
    );
};


export default SearchMenu;