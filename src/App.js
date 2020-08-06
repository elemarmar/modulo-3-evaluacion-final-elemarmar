import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Switch>
      <Route path="/" render={() => <p>Landing</p>} />
      <Route path="/search" render={() => <p>Search</p>} />
    </Switch>
  );
}

export default App;
