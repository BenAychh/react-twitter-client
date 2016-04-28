
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
    this.keywords = ['Trump'];
  }

  getTweetArray() {
    return this.tweetQueue.tweetArray;
  }

  setKeywords(string) {
    this.keywords = string.split(',').trim();
    this.disconnect();
    this.connect();
  }

  connect() {
    var socket = new SockJS('http://10.2.12.134:8080/tweet');
    this.stompClient = Stomp.over(socket);
    this.stompClient.connect({
      apiKey: '12345',
      keywords: ['Trump'],
    }, (frame) => {
      console.log('Connected: ' + frame);
      this.stompClient.subscribe('/tweets/12345', (res) => {
        this.callback(JSON.parse(res.body));
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
