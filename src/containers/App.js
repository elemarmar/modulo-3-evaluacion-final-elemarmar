import React, {useEffect, useState} from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from '../components/Landing/Landing'
import Search from '../components/SearchMenu/SearchMenu'
import SeasonsMenu from '../components/SeasonsMenu/SeasonsMenu';
import getDataFromApi from '../services/getDataFromApi';
import './App.css';

function App() {
  const [showCharacters, setShowCharacters] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDataFromApi()
      .then(data => setShowCharacters(data))
      .then(() => setLoading(false));
  }, []);


const handleFilter = (data) => {
 console.log(data);
}

  return (
    <>
      <Switch>
        <Route path="/search" render={() => <Search charactersData={showCharacters}/>} />
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
