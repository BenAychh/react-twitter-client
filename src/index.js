import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

import Dashboard from './components/Dashboard';
import InitialView from './components/InitialView';
import TweetColumn from './components/TweetColumn';
import GraphContainer from './components/GraphContainer';
import TwitterSocket from './tweetprocessor.js';
import LimitedSizeArray from './helpers/LimitedSizeArray.js';

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

var Filtered = React.createClass({

  getInitialState() {
    return {
      columnArray: new LimitedSizeArray(10),
    };
  },

  componentDidMount() {
    this.twitterSocket = new TwitterSocket((tweet) => {
      this.setState({
        columnArray: this.state.columnArray.add(JSON.parse(tweet)),
      });
    });
    this.twitterSocket.connect();
  },

  render() {
    return (
      <div>
        <Dashboard />
        <TweetColumn tweets={this.state.columnArray.getArray()}/>
        <GraphContainer />
      </div>
    )
  }
})
ReactDOM.render(<Filtered />, document.querySelector('.container'));
