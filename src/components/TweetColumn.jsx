import React from 'react';
import { Component } from 'react';

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
    )
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
          <IndividualTweet />
        </ul>
      </div>
    )
  }
}

class IndividualTweet extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="individual-tweets">
        <li className="tweet">Scenester leggings artisan kale chips jean shorts farm-to-table disrupt ramps mlkshk. Freegan tofu knausgaard, everyday carry ennui pour-over chambray wayfarers cronut synth brooklyn poutine.</li>
        <li className="tweet">Man bun umami retro, sartorial whatever iPhone four loko fanny pack. Kombucha gastropub drinking vinegar YOLO.</li>
        <li className="tweet">Vinyl blog tofu, green juice pitchfork man bun meggings art party put a bird on it marfa next level trust fund.</li>
        <li className="tweet">Tattooed try-hard chia, flannel offal hella banjo YOLO slow-carb before they sold out crucifix migas 8-bit.</li>
        <li className="tweet">Bespoke mlkshk hashtag, vinyl tote bag keffiyeh dreamcatcher chia DIY sustainable.</li>
      </div>
    )
  }
}

export default TweetColumn;