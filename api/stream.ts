var s = require('../config/setup')

let stream = s.setup.stream('user')

module.exports = {
    
}

// every day - ms * sec * min * hr
// setInterval(tweet('so u tellin me a shrimp fried this rice'), 1000*60*60*24);

function browsePublic(stream) {
    // s = stream.stream('public');

    // search('machine learning', 10);
}

// any time someone follows the bot
// stream.on('follow', followBack(event));
// someone tweets to the bot
// stream.on('tweet', mention(event));

// someone follows the bot
// function followBack(event) {

//     console.log("\nFollow event!\n");
//     var name = event.source.name;
//     var screenName = event.source.screen_name;
//     tweet("yooooooo @" + screenName + " followed me! what's good?");
//     follow(from);
// }

// someone mentions the bot
// function mention(event) {
//     // write mention tweet data to 'tweet.json'
//     var fs = require('fs');
//     var json = JSON.stringify(event, null, 2);
//     fs.writeFile("tweet.json", json);

//     // get data from mention JSON file
//     var replyTo = event.in_reply_to_screen_name;
//     var text = event.text;
//     var from = event.user.screen_name;
//     var tweetId = event.id;

//     // if the tweet DOES mention the bot
//     if (replyTo === 'tweetinassbot') {
//         console.log("\nThe bot was mentioned!\n");
//         var newTweet = '@' + from + ' my bad, g, what did you say? im faded lol';
//         reply(newTweet, tweetId);
//     }
// }