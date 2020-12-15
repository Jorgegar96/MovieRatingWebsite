import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { MoviePage } from './components/MoviePage'
import { Nav } from './components/Nav'
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Nav/>
      <div className="scrollbar scrollbar-black borered-black square thin">
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/:idmbID" component={MoviePage}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
