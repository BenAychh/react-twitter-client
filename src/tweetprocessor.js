
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
    this.stompClient = null;
    this.callback = pCallback;
    this.keywords = [];
  }

  getTweetArray() {
    return this.tweetQueue.tweetArray;
  }

  setFilters(object) {
    this.keywords = object.keywords.trim().split(',');
    console.log(this.keywords);
    this.disconnect();
    this.connect();
  }

  connect() {
    var socket = new SockJS('http://54.187.176.147:8080/tweet');
    this.stompClient = Stomp.over(socket);
    this.stompClient.debug = null;
    this.stompClient.connect({
      apiKey: '12345',
      keywords: this.keywords,
    }, (frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/tweets/12345', (res) => {
        var tweet = JSON.parse(res.body);
        if (!this.tweetQueue.contains(tweet.id)) {
          this.callback(JSON.parse(res.body));
          this.tweetQueue.add(tweet.id);
        }
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }
    console.log('Disconnected');
  }
}

export default TwitterSocket;
