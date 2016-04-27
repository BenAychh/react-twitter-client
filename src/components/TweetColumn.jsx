import React from 'react';
import { Component } from 'react';
import TwitterSocket from '../tweetprocessor.js';

class TweetColumn extends Component {
  constructor() {
    super();
    this.tweetList = <TweetList />
  }

  render() {
    return (
      <div className="col-md-2 tweet-column">
        <h3 className="center">TweetColumn</h3>
        <TweetList tweets={this.props.tweets}/>
      </div>
    );
  }
}

class TweetList extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="tweet-list center">
        <ul className="center">
          {this.props.tweets.map((message, i) => {
            return (
              <IndividualTweet key={message.id} tweet={message} />)
          })}
        </ul>
      </div>
    );
  }
}

class IndividualTweet extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.tweet);
  }

  render() {
    return (
        <li className="tweet">
          <p className="user">{this.props.tweet.user}</p>
          <img className="img-responsive" src={this.props.tweet.mediaUrl} />
          <p className="tweetBody">{this.props.tweet.text}</p>
        </li>
    );
  }
}

export default TweetColumn;
