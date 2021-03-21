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
import {Travel} from './contact'
import {Home} from './home'
import {NavigationBar} from './navigationsbar.js'
import {About} from './about'
import {Gallery} from './gallery'
import {Recent} from './recentwork'
import {Services} from './services'


class App extends Component {
  render () {
    return (
      <React.Fragment>
        <NavigationBar/>
        <Jumbotron />
        <BrowserRouter>
          <Switch>
            <Route exact path="/contact" component={Travel} />
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/recent" component={Recent} />
            <Route exact path="/services" component={Services} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}



export default App;
