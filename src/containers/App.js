import React, { useEffect, useState } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Landing from '../components/Landing/Landing';
import Search from '../components/SearchMenu/SearchMenu';
import SeasonsMenu from '../components/SeasonsMenu/SeasonsMenu';
import Api from '../services/getDataFromApi';
import './App.css';
import Title from '../assets/images/website-title.png';
import CharacterDetail from '../components/SearchMenu/CharacterDetail/CharacterDetail';
import MissingCharacter from '../components/Errors/MissingCharacter/MissingCharacter';
import MissingPage from '../components/Errors/MissingPage/MissingPage';

const seasonsEpisodes = {
  s1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  s2: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  s3: [22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
  s4: [32, 33, 34, 35, 36],
};

const App = (props) => {
  const [characters, setCharacters] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');
  const [seasonFilter, setSeasonFilter] = useState();
  const [pageNumber, setPageNumber] = useState(1);

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
      Api.all(pageNumber)
        .then((data) => {
          if (characters.length > 0) {
            setCharacters((oldCharacters) => [...oldCharacters, ...data]);
          } else {
            setCharacters(data);
          }
        })
        .then(() => {
          setLoading(false);
        });
    }
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

  const renderCharacterDetail = (props) => {
    const characterId = props.match.params.characterId;
    const foundCharacter = characters.find((character) => {
      return character.id === parseInt(characterId);
    });
    if (foundCharacter !== undefined) {
      return <CharacterDetail character={foundCharacter} />;
    } else {
      return <MissingCharacter missingId={characterId} />;
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

  return (
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
            return loading ? <p>Loading</p> : renderCharacterDetail(props);
          }}
        />
        {seasonFilter ? (
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
                updatePage={updatePage}
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

        <Route path='/' exact component={Landing} />
        <Route render={() => <MissingPage />} />
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
    </main>
  );
};

export default App;
