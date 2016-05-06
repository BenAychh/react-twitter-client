
class TweetQueue {
  constructor (maxSize) {
    this.maxSize = maxSize;
    this.tweetArray = [];
  }

  add(tweetId) {
    this.tweetArray.unshift(tweetId);
    if (this.tweetArray.length > this.maxSize) {
      this.tweetArray.pop();
    }
  }

  contains(tweetId) {
    return this.tweetArray.indexOf(tweetId) !== -1;
  }
}

class TwitterSocket {

  constructor(pCallback) {
    this.tweetQueue = new TweetQueue(10);
    this.callback = pCallback;
    var location = {
      hostname: '10.2.12.248',
      port: 4567,
    };
    this.webSocket = new WebSocket('ws://' + location.hostname
      + ':' + location.port + '/subscribe');
    this.webSocket.onmessage = (msg) => {
      this.callback(JSON.parse(msg.data));
    };

    this.webSocket.onmessage.bind(this);
    this.webSocket.onopen = () => {
      var object = {
        apiKey: '5476310c-01d3-43db-8a90-7b9c69274474',
        kincaid: 0,
        keywords: '',
      };
      this.setFilters(object);
    }

    this.webSocket.onopen.bind(this);
  }

  getTweetArray() {
    return this.tweetQueue.tweetArray;
  }

  setFilters(object) {
    object.apiKey = '5476310c-01d3-43db-8a90-7b9c69274474';
    this.webSocket.send(JSON.stringify(object));
  }

  disconnect() {
    if (this.webSocket != null) {
      this.webSocket = null;
    }

    console.log('Disconnected');
  }
}

export default TwitterSocket;
