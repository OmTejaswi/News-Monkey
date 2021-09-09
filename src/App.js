import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Feedback from './components/Feedback';


export default class App extends Component {
  pageSize = 12;
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
            <Route exact path='/business'>
              <News key='business' pageSize={this.pageSize} category='business' country='in' badge={'warning'} />
            </Route>
            <Route exact path='/entertainment'>
              <News key='entertainment' pageSize={this.pageSize} category='entertainment' country='in' badge={'success'} />
            </Route>
            <Route exact path='/general'>
              <News key='general' pageSize={this.pageSize} category='general' country='in' badge={'primary'} />
            </Route>
            <Route exact path='/health'>
              <News key='health' pageSize={this.pageSize} category='health' country='in' badge={'danger'} />
            </Route>
            <Route exact path='/science'>
              <News key='science' pageSize={this.pageSize} category='science' country='in' badge={'info'} />
            </Route>
            <Route exact path='/sports'>
              <News key='sports' pageSize={this.pageSize} category='sports' country='in' badge={'info'} />
            </Route>
            <Route exact path='/technology'>
              <News key='technology' pageSize={this.pageSize} category='technology' country='in' badge={'primary'} />
            </Route>
            <Route exact path='/feedback'>
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