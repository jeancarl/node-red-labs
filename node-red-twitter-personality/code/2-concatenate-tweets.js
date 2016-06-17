msg.payload = msg.payload.tweets.map(function(tweet) {
    return tweet.message.body;
}).join(' ');

return msg;
