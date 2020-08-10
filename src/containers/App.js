// dependencies
import React, { useEffect, useState } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

// styles
import './App.css';
import Title from '../assets/images/website-title.png';

// components
import Landing from '../components/Landing/Landing';
import Search from '../components/SearchMenu/SearchMenu';
import SeasonsMenu from '../components/SeasonsMenu/SeasonsMenu';
import CharacterDetail from '../components/SearchMenu/CharacterDetail/CharacterDetail';
import CharacterDetailAuthor from '../components/SearchMenu/CharacterDetail/CharacterDetailAuthor';
import MissingPage from '../components/Errors/MissingPage/MissingPage';
import Nav from '../components/Nav/Nav';
import Loader from '../components/UI/Loader/Loader';

// data & services
import Api from '../services/getDataFromApi';
import author from '../data/author.json';

const episodeBreak = {
  season1: 12,
  season2: 22,
  season3: 32,
};

const App = (props) => {
  // states
  const [characters, setCharacters] = useState('');
  const [loading, setLoading] = useState(true);

  // filters
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');
  const [seasonFilter, setSeasonFilter] = useState();
  const [isOrderedByName, setIsOrderedByName] = useState(false);

  // to create less attributes for children components
  const filters = {
    name: nameFilter,
    species: speciesFilter,
    status: statusFilter,
    gender: genderFilter,
    season: seasonFilter,
    order: isOrderedByName,
  };

  // fetch

  useEffect(() => {
    setLoading(true);
    for (let i = 1; i < 31; i++) {
      Api.all(i)
        .then((data) => {
          setCharacters((oldCharacters) => [...oldCharacters, ...data]);
        })
        .then(setLoading(false));
    }
  }, []);

  const handleFilter = (data) => {
    if (data.key === 'name') {
      setNameFilter(data.value);
    } else if (data.key === 'species') {
      setSpeciesFilter(data.value);
    } else if (data.key === 'status') {
      setStatusFilter(data.value);
    } else if (data.key === 'gender') {
      setGenderFilter(data.value);
    } else if (data.key === 'season') {
      setSeasonFilter(data.value);
    }
  };

  const renderFilteredCharacters = () => {
    let filteredCharacters = [];
    if (characters) {
      filteredCharacters = characters
        .filter((character) => {
          return character.name
            .toLowerCase()
            .includes(nameFilter.toLowerCase());
        })
        .filter((character) => {
          if (speciesFilter === 'All') {
            return true;
          } else {
            return character.species === speciesFilter;
          }
        })
        .filter((character) => {
          if (statusFilter === 'All') {
            return true;
          } else {
            return character.status === statusFilter;
          }
        })
        .filter((character) => {
          if (genderFilter === 'All') {
            return true;
          } else {
            return character.gender === genderFilter;
          }
        })
        .filter((character) => {
          if (seasonFilter === '4') {
            return true;
          } else if (seasonFilter === '1') {
            return character.episode
              .map((c) => c.slice(40))
              .some((ep) => ep < episodeBreak.season1);
          } else if (seasonFilter === '2') {
            return character.episode
              .map((c) => c.slice(40))
              .some((ep) => ep < episodeBreak.season2);
          } else if (seasonFilter === '3') {
            return character.episode
              .map((c) => c.slice(40))
              .some((ep) => ep < episodeBreak.season3);
          }
        });
    }
    return filteredCharacters;
  };

  const orderCharacters = (state) => {
    if (state) {
      setIsOrderedByName(true);
    } else {
      setIsOrderedByName(false);
    }
  };

  return (
    <>
      <main className='App'>
        <div className='background'>
          <div id='stars'></div>
          <div id='stars2'></div>
          <div id='stars3'></div>
        </div>

        <Link to='/'>
          <h1 className='Title'>
            <img src={Title} alt='Rick and Morty' />
          </h1>
        </Link>

        <Switch>
          <Route
            path='/search/:characterId'
            render={(props) => {
              return loading ? (
                <Loader />
              ) : (
                <CharacterDetail characterId={props.match.params.characterId} />
              );
            }}
          />
          {seasonFilter ? (
            <Route
              exact
              path='/search'
              render={() => {
                return characters.length < 500 ? (
                  <Loader />
                ) : (
                  <Search
                    filters={filters}
                    charactersData={renderFilteredCharacters()}
                    handleFilter={handleFilter}
                    orderCharacters={orderCharacters}
                  />
                );
              }}
            />
          ) : (
            <Redirect from='/search' to='/seasons' />
          )}

          <Route
            path='/seasons'
            render={() => <SeasonsMenu handleFilter={handleFilter} />}
          />
          <Route
            path='/about'
            render={() => <CharacterDetailAuthor character={author} />}
          />

          <Route path='/' exact component={Landing} />
          <Route render={() => <MissingPage />} />
        </Switch>
      </main>
      <footer>
        <Nav />
      </footer>
    </>
  );
};

export default App;
