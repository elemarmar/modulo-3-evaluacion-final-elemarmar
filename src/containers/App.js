import React, {useEffect, useState} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from '../components/Landing/Landing'
import Search from '../components/SearchMenu/SearchMenu'
import SeasonsMenu from '../components/SeasonsMenu/SeasonsMenu';
import Api from '../services/getDataFromApi';
import './App.css';

function App() {
  const [characters, setCharacters] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (nameFilter) {
      Api.name(nameFilter.toLowerCase())
      .then(data => setCharacters(data))
      .then(() => {
        setLoading(false)});
    } else {
        Api.all()
        .then(data => setCharacters(data))
        .then(() => setLoading(false));
    }
  }, [nameFilter]);


  
const handleFilter = (data) => {
  setNameFilter(data.value);
}

  return (
    <>
      <Switch>
        <Route path="/search" render={() => <Search charactersData={characters} handleFilter={handleFilter} nameFilter={nameFilter}/>} />
        <Route path="/seasons" component={SeasonsMenu} />
        <Route path="/" component={Landing} />
      </Switch>
      <ul>
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/">Home</Link></li>
      </ul>
    </>
  );
}

export default App;
