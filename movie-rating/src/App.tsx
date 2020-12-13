import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Nav } from './components/Nav'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
      </Switch>
    </Router>
  );
}

export default App;
