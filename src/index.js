import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';


import Dashboard from './components/Dashboard';
import InitialView from './components/InitialView';
import TweetColumn from './components/TweetColumn';
import GraphContainer from './components/GraphContainer';



class Home extends Component {
  constructor () {
    super();

  }

  render() {
    return (
      <div>
        <Dashboard />
        <InitialView />
      </div>
    )
  }
}
class Filtered extends Component {
  constructor () {
    super();

  }

  render() {
    return (
      <div>
        <Dashboard />
        <TweetColumn />
        <GraphContainer />
      </div>
    )
  }
}
ReactDOM.render(<Filtered />, document.querySelector('.container'));