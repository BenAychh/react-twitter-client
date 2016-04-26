import React from 'react';
import { Component } from 'react';
import TweetQueue from '../01_tweetprocessor.js';

class TweetColumn extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-2 tweet-column">
        <h3 className="center">TweetColumn</h3>
        <TweetList />
      </div>
    );
  }
}

var tweetArray = [
  {
    id: 1,
    user: 'Ben',
    text: 'I hope this works',
  },
  {
    id: 2,
    user: 'Kyle',
    text: 'This fucking sucks',
  },
  {
    id: 3,
    user: 'Dave',
    text: 'Java gives me a headache',
  },
];

var tq = new TweetQueue(10);
tq.add({
    id: 3,
    user: 'Dave',
    text: 'Java gives me a headache',
  });

class TweetList extends Component {
  constructor() {
    super();
  }

  render() {
    var indTweets = [];
    tq.tweetArray.forEach(tweet => {
      indTweets.push(<IndividualTweet tweet={tweet} key={tweet.id}/>);
    });
    return (
      <div className="tweet-list center">
        <ul className="center">
          {indTweets}
        </ul>
      </div>
    );
  }
}

class IndividualTweet extends Component {
  constructor(props) {
    super(props);
    this.tweetInfo = props.tweet;
  }

  render() {
    return (
        <li className="tweet">
          <p>{this.tweetInfo.user}</p>
          <p>{this.tweetInfo.text}</p>
        </li>
    );
  }
}

export default TweetColumn;
