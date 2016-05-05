var WebSocket = require('ws');
var location = {
  hostname: '10.2.12.248',
  port: 4567,
};

var message = {
  message: 'you\'re connected',
};

// console.log(JSON.stringify(message));
var filter = {
  apiKey: '5476310c-01d3-43db-8a90-7b9c69274474',
  kincaid: 0,
  keywords: 'Clinton,Trump, Cruz, Bernie',
};

var webSocket = new WebSocket('ws://' + location.hostname + ':' + location.port + '/subscribe');
webSocket.onmessage = function (msg) {
  console.log(JSON.parse(msg.data));
};

setTimeout(function () {
  webSocket.send(JSON.stringify(filter));
}, 1000);

// setTimeout(function () {
//   webSocket = null;
// }, 5000);
