
class TweetQueue {
  constructor (maxSize) {
    this.maxSize = maxSize;
    this.tweetArray = [];
  }

  add(tweet) {
    this.tweetArray.unshift(tweet);
    if (this.tweetArray.length > this.maxSize) {
      this.tweetArray.pop();
    }
  }
}

class TwitterSocket {

  constructor(pCallback) {
    this.tweetQueue = new TweetQueue(10);
    this.stompClient = null;
    this.callback = pCallback;
  }

  getTweetArray() {
    return this.tweetQueue.tweetArray;
  }

  connect() {
    var socket = new SockJS('http://10.2.12.248:8080/tweet');
    this.stompClient = Stomp.over(socket);
    // this.stompClient.debug = null;
    this.stompClient.connect({
      apiKey: '71CC9BAA-3068-41DF-A17F-CF60DCDB3827',
    }, (frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/tweets', (res) => {
        this.tweetQueue.add(JSON.parse(res.body));
        this.callback();
      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    setConnected(false);
    console.log('Disconnected');
  }
}

export default TwitterSocket;
