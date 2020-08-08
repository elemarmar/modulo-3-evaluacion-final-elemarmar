import React, { useEffect, useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Search from '../components/SearchMenu/SearchMenu';
import SeasonsMenu from '../components/SeasonsMenu/SeasonsMenu';
import Api from '../services/getDataFromApi';
import './App.css';
import Title from '../assets/images/website-title.png';
import CharacterDetail from '../components/SearchMenu/CharacterDetail/CharacterDetail';

const App = (props) => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');
  const [seasonFilter, setSeasonFilter] = useState(0);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    if (nameFilter) {
      Api.name(nameFilter.toLowerCase())
        .then((data) => setCharacters(data))
        .then(() => {
          setLoading(false);
        });
    } else {
      Api.all()
        .then((data) => setCharacters(data))
        .then(() => setLoading(false));
    }
  }, [nameFilter]);

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
    console.log(seasonFilter);
  };

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    }
  };

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
      });
  } else {
  }

  return (
    <>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <Link to='/'>
        <h1 className='Title'>
          <img src={Title} />
        </h1>
      </Link>
      <Switch>
        <Route
          path='/search/:characterId'
          render={(props) => {
            return loading ? <p>Loading</p> : renderCharacterDetail(props);
          }}
        />
        <Route
          exact
          path='/search'
          render={() => (
            <Search
              charactersData={filteredCharacters}
              handleFilter={handleFilter}
              nameFilter={nameFilter}
              genderFilter={genderFilter}
              speciesFilter={speciesFilter}
              statusFilter={statusFilter}
              seasonFilter={seasonFilter}
            />
          )}
        />

        <Route
          path='/seasons'
          render={() => <SeasonsMenu handleFilter={handleFilter} />}
        />
        <Route path='/' component={Landing} />
      </Switch>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/search'>Search</Link>
        </li>
        <li>
          <Link to='/seasons'>Seasons</Link>
        </li>
      </ul>
    </>
  );
};

export default App;
