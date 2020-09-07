import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Jumbotron} from './jumbotron';
import {ImageGridList} from './gridlists'
import { Button } from '@material-ui/core';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Card1 from './card'
import Card2 from './card2'
import Card3 from './card3'
import CenteredGrid from './grid'
import {Travel} from './travel'
import {NavigationBar} from './navigationsbar.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <React.Fragment>
<NavigationBar/>
      <BrowserRouter>
              <Switch>

  <Route exact path="/travel.js" component ={Travel} />
<Route exact path="/travel.js" component ={Travel} />
<Route exact path="/travel.js" component ={Travel} />
                </Switch>

            </BrowserRouter>

< Jumbotron />

</React.Fragment>


< CenteredGrid />

  <h1> Site under construction.</h1>
      </header>
    </div>
  );
}

export default App;
