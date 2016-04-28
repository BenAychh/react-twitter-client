import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';

import Dashboard from './components/Dashboard';
import InitialView from './components/InitialView';
import TweetColumn from './components/TweetColumn';
import GraphContainer from './components/GraphContainer';
import TwitterSocket from './tweetprocessor.js';
import LimitedSizeArray from './helpers/LimitedSizeArray.js';
import LimitedSizeChartData from './helpers/LimitedSizeChartData.js';
import Filters from './helpers/Filters.js';

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

var filters = new Filters();

var Filtered = React.createClass({

  getInitialState() {
    return {
      columnArray: new LimitedSizeArray(10),
      graphArray: new LimitedSizeChartData(20),
    };
  },

  componentDidMount() {
    this.twitterSocket = new TwitterSocket((tweet) => {
      this.setState({
        columnArray: this.state.columnArray.add(tweet),
        graphArray: this.state.graphArray.add(tweet.grade),
      });
    });
    this.twitterSocket.connect();
  },

  render() {
    return (
      <div>
        <Dashboard twitterSocket={this.twitterSocket} filters={filters}/>
        <TweetColumn tweets={this.state.columnArray.getArray()}/>
        <GraphContainer data={this.state.graphArray.getChartObject()}/>
      </div>
    )
  }
})
ReactDOM.render(<Filtered />, document.querySelector('.container'));
