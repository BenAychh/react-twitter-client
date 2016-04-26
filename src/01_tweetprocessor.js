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

export default TweetQueue;
