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
    }
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

  const filteredCharacters = characters.filter((character) => {
    if (speciesFilter === 'All') {
      return true;
    } else {
      return character.species === speciesFilter;
    }
  });
  console.log('characters', filteredCharacters);
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
            />
          )}
        />

        <Route path='/seasons' component={SeasonsMenu} />
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
