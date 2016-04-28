import React from 'react';
import { Component } from 'react';
import TwitterSocket from '../tweetprocessor.js';

class TweetColumn extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="col-md-3 tweet-column border-right">
        <h3 className="center white text-shadow"><em>Tweet Column</em></h3>
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
        <ul className="no-decoration">
          {this.props.tweets.map((message, i) =>
              <IndividualTweet key={message.id} tweet={message} />
          )}
        </ul>
      </div>
    );
  }
}

class IndividualTweet extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var classes = 'tweet ';
    switch (true) {
      case this.props.tweet.grade <= 2:
        classes += 'veryNegSen';
        break;
      case this.props.tweet.grade <= 5:
        classes += 'negSen';
        break;
      case this.props.tweet.grade <= 8:
        classes += 'neutralSen';
        break;
      case this.props.tweet.grade <= 10:
        classes += 'posSen';
        break;;
      default:
        classes += 'veryPosSen';
    }
    return (
        <li className={classes}>
          <p className="user">{this.props.tweet.user}</p>
          <img className="img-responsive" src={this.props.tweet.mediaUrl} />
          <p className="tweetBody">{this.props.tweet.text}</p>
          <p>Grade Level: {this.props.tweet.grade}</p>
        </li>
    );
  }
}

export default TweetColumn;
