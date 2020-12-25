import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { MoviePage } from './components/MoviePage'
import { Nav } from './components/Nav'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css';

function App() {
   const { isLoading } = useAuth0();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-light mt-5" role="status">
          <span className="sr-only">Loading...</span>
        </div>  
      </div>
    )
  }
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
