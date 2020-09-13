import React, {Component} from 'react';
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
import {Home} from './home'
import {NavigationBar} from './navigationsbar.js'

class App extends Component {

  render () {
    return (
      <React.Fragment>
<NavigationBar/>
< Jumbotron />


<h1> Site under construction</h1>
      <BrowserRouter>

              <Switch>

  <Route exact path="/travel" component ={Travel} />

                </Switch>

            </BrowserRouter>

    </React.Fragment>
  )
}
}



export default App;
