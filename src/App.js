import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Feedback from './components/Feedback';

export default class App extends Component {
  pageSize = 6;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>
            {/* India */}
            <Route exact path='/'>
              <News key='general' pageSize={this.pageSize} category='general' country='in' badge={'primary'} />
            </Route>
            <Route exact path='/News-Monkey/business'>
              <News key='business' pageSize={this.pageSize} category='business' country='in' badge={'warning'} />
            </Route>
            <Route exact path='/News-Monkey/entertainment'>
              <News key='entertainment' pageSize={this.pageSize} category='entertainment' country='in' badge={'success'} />
            </Route>
            <Route exact path='/News-Monkey/general'>
              <News key='general' pageSize={this.pageSize} category='general' country='in' badge={'primary'} />
            </Route>
            <Route exact path='/News-Monkey/health'>
              <News key='health' pageSize={this.pageSize} category='health' country='in' badge={'danger'} />
            </Route>
            <Route exact path='/News-Monkey/sports'>
              <News key='sports' pageSize={this.pageSize} category='sports' country='in' badge={'info'} />
            </Route>
            <Route exact path='/News-Monkey/science'>
              <News key='science' pageSize={this.pageSize} category='science' country='in' badge={'info'} />
            </Route>
            <Route exact path='/News-Monkey/technology'>
              <News key='technology' pageSize={this.pageSize} category='technology' country='in' badge={'primary'} />
            </Route>
            <Route exact path='/News-Monkey/feedback'>
              <Feedback key='feedback' />
            </Route>
            {/* <Route exact path='/international'>
              <News key='international' pageSize={this.pageSize}  category='international' country='in' />
            </Route> */}
          </Switch>
        </Router>
      </div>
    )
  }
}