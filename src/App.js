import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import Landing from './components/Landing/Landing'
import Search from './components/SearchMenu/SearchMenu'
import SeasonsMenu from './components/SeasonsMenu/SeasonsMenu';
import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route path="/search" component={Search} />
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
