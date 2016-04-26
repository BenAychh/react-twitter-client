import React from 'react';
import { Component } from 'react';
import TwitterSocket from '../tweetprocessor.js';

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

var twitterSocket = new TwitterSocket();
twitterSocket.connect();

class TweetList extends Component {
  constructor() {
    super();
  }

  render() {
    var indTweets = [];
    twitterSocket.tweetQueue.tweetArray.forEach(tweet => {
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
