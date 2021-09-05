import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Switch,
  Route,
  HashRouter
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
          <Switch>
            {/* India */}
            <Route exact path='/'>
              <News key='general' pageSize={20} category='general' country='in' />
            </Route>
            <Route exact path='/business'>
              <News key='business' pageSize={20} category='business' country='in' />
            </Route>
            <Route exact path='/entertainment'>
              <News key='entertainment' pageSize={20} category='entertainment' country='in' />
            </Route>
            <Route exact path='/general'>
              <News key='general' pageSize={20} category='general' country='in' />
            </Route>
            <Route exact path='/health'>
              <News key='health' pageSize={20} category='health' country='in' />
            </Route>
            <Route exact path='/science'>
              <News key='science' pageSize={20} category='science' country='in' />
            </Route>
            <Route exact path='/sports'>
              <News key='sports' pageSize={20} category='sports' country='in' />
            </Route>
            <Route exact path='/technology'>
              <News key='technology' pageSize={20} category='technology' country='in' />
            </Route>
            {/* <Route exact path='/international'>
              <News key='international' pageSize={20} category='international' country='in' />
            </Route> */}
          </Switch>
        </Router>
      </div>
    )
  }
}