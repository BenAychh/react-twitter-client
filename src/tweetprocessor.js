
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

  constructor() {
    this.tweetQueue = new TweetQueue(10);
    this.stompClient = null;
  }

  connect() {
      var socket = new SockJS('http://10.2.12.248:8080/tweet');
      this.stompClient = Stomp.over(socket);
      this.stompClient.connect({}, function (frame) {
          setConnected(true);
          console.log('Connected: ' + frame);
          this.stompClient.subscribe('http://10.2.12.248:8080/tweets', function (res) {
              tweetQueue.add(res.body);
              console.log(res.body);
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
