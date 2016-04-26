
class TweetQueue {
  constructor (maxSize){
    this.maxSize = maxSize;
    this.tweetArray = [];
  }
  add(tweet){
    this.tweetArray.push(tweet);
    if(this.tweetArray.length > this.maxSize){
      this.tweetArray.shift();
    }
  }
}

class TwitterSocket {

  constructor(pCallback) {
    this.tweetQueue = new TweetQueue(3);
    this.stompClient = null;
    this.callback = pCallback;
  }

  tempAdd(tweet) {
    this.tweetQueue.add(tweet);
  }

  getTweetArray() {
    return this.tweetQueue.tweetArray;
  }

  connect() {
      var socket = new SockJS('/tweet');
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({
          apiKey: '71CC9BAA-3068-41DF-A17F-CF60DCDB3827'
      }, function (frame) {
          setConnected(true);
          console.log('Connected: ' + frame);
          this.stompClient.subscribe('/tweets', function (res) {
              console.log(res.body);
              //showTweet(res.body);
          });
      });
  }

  disconnect() {
      if (this.stompClient != null) {
          this.stompClient.disconnect();
      }
      setConnected(false);
      console.log("Disconnected");
  }
}

export default TwitterSocket;
