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
import MissingPage from '../components/Errors/MissingPage/MissingPage';
import Nav from '../components/Nav/Nav';

// data & services
import Api from '../services/getDataFromApi';
import author from '../data/author.json';

const App = (props) => {
  // states
  const [characters, setCharacters] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);

  // filters
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');
  const [seasonFilter, setSeasonFilter] = useState();

  // to create less attributes for children components
  const filters = {
    name: nameFilter,
    species: speciesFilter,
    status: statusFilter,
    gender: genderFilter,
    season: seasonFilter,
  };

  // fetch
  useEffect(() => {
    setLoading(true);
    // fetch by name
    // if (nameFilter) {
    //   Api.name(nameFilter.toLowerCase())
    //     .then((data) => setCharacters(data))
    //     .then(() => {
    //       setLoading(false);
    //     });

    // fetch by page
    Api.all(pageNumber)
      .then((data) => {
        if (characters) {
          setCharacters((oldCharacters) => [...oldCharacters, ...data]);
        } else {
          setCharacters(data);
        }
      })
      .then(() => {
        setLoading(false);
      });
  }, [nameFilter, pageNumber]);

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

  const updatePage = () => {
    const updatedPageNumber = pageNumber + 1;
    setPageNumber(updatedPageNumber);
  };

  const renderFilteredCharacters = () => {
    let filteredCharacters = [];
    if (characters) {
      filteredCharacters = characters
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
              .some((ep) => ep < 12);
          } else if (seasonFilter === '2') {
            return character.episode
              .map((c) => c.slice(40))
              .some((ep) => ep < 22);
          } else if (seasonFilter === '3') {
            return character.episode
              .map((c) => c.slice(40))
              .some((ep) => ep < 32);
          }
        });
    }
    return filteredCharacters;
    console.log(characters);
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
            <img src={Title} />
          </h1>
        </Link>

        <Switch>
          <Route
            path='/search/:characterId'
            render={(props) => {
              return loading ? (
                <p>Loading</p>
              ) : (
                <CharacterDetail characterId={props.match.params.characterId} />
              );
            }}
          />
          {seasonFilter ? (
            <Route
              exact
              path='/search'
              render={() => (
                <Search
                  filters={filters}
                  charactersData={renderFilteredCharacters()}
                  handleFilter={handleFilter}
                  updatePage={updatePage}
                  pageNumber={pageNumber}
                />
              )}
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
            render={() => <CharacterDetail character={author} />}
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
