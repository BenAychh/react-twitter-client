import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';


import Dashboard from './components/Dashboard';
import InitialView from './components/InitialView';
import TweetColumn from './components/TweetColumn';
import GraphContainer from './components/GraphContainer';
import TwitterSocket from './tweetprocessor.js';



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
    return {tweets: []};
  },

  componentDidMount() {
    this.twitterSocket = new TwitterSocket(() => {
      this.setState({tweets: this.twitterSocket.getTweetArray()})
    });
    this.twitterSocket.connect();
  },

  render() {
    return (
      <div>
        <Dashboard />
        <TweetColumn tweets={this.state.tweets}/>
        <GraphContainer />
      </div>
    )
  }
})
ReactDOM.render(<Filtered />, document.querySelector('.container'));
