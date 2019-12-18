// bot.js
// main file for twitterBot
// - requires npm packages:
//  - twit
//  - prompt

// ----------------------------------------------------------------------------

// print start message
console.log('\n');
console.log('           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
console.log('           ░░▀▀█▀▀ █░░░█ ░▀░ ▀▀█▀▀ ▀▀█▀▀ █▀▀ █▀▀█ █▀▀▄ █▀▀█ ▀▀█▀▀░░');
console.log('           ░░░░█░░ █▄█▄█ ▀█▀ ░░█░░ ░░█░░ █▀▀ █▄▄▀ █▀▀▄ █░░█ ░░█░░░░');
console.log('           ░░░░▀░░ ░▀░▀░ ▀▀▀ ░░▀░░ ░░▀░░ ▀▀▀ ▀░▀▀ ▀▀▀░ ▀▀▀▀ ░░▀░░░░');
console.log('           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
console.log('\n');



// links to npm package 'twitter' for Twitter API communication
var Twit = require('twit');
// grab API access keys from config
var config = require('./config');
// new twitter API T for bot
var T = new Twit(config);

// contain rest API menu in exit clause
// var exitPrompt = null;
// while (exitPrompt != 'exit') {
//     // restAPIMenu();
//     exitPrompt = prompt("\n* Type 'exit' to end Rest API menu");
// }

// ----------------------------------------------------------------------------

// *************************************************************

// // ┏━━━┓ ┏━━━━┓ ┏━━━┓ ┏━━━┓ ┏━━━┓ ┏━┓┏━┓   ┏━━━┓ ┏━━━┓ ┏━━┓
// // ┃┏━┓┃ ┃┏┓┏┓┃ ┃┏━┓┃ ┃┏━━┛ ┃┏━┓┃ ┃ ┗┛ ┃   ┃┏━┓┃ ┃┏━┓┃ ┗┫┣┛
// // ┃┗━━┓ ┗┛┃┃┗┛ ┃┗━┛┃ ┃┗━━┓ ┃┃ ┃┃ ┃┏┓┏┓┃   ┃┃ ┃┃ ┃┗━┛┃  ┃┃
// // ┗━━┓┃   ┃┃   ┃┏┓┏┛ ┃┏━━┛ ┃┗━┛┃ ┃┃┃┃┃┃   ┃┗━┛┃ ┃┏━━┛  ┃┃
// // ┃┗━┛┃   ┃┃   ┃┃┃┗┓ ┃┗━━┓ ┃┏━┓┃ ┃┃┃┃┃┃   ┃┏━┓┃ ┃┃    ┏┫┣┓
// // ┗━━━┛   ┗┛   ┗┛┗━┛ ┗━━━┛ ┗┛ ┗┛ ┗┛┗┛┗┛   ┗┛ ┗┛ ┗┛    ┗━━┛

// set up user stream
// var stream = T.stream('user');

tweet('so u tellin me a shrimp fried this rice')
// every day - ms * sec * min * hr
// setInterval(tweet('so u tellin me a shrimp fried this rice'), 1000*60*60*24);

// function browsePublic(stream) {
//     stream = T.stream('public');

//     search('machine learning', 10);
// }

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

// ┏━━━┓ ┏━━━┓ ┏━━━┓ ┏━━━━┓   ┏━━━┓ ┏━━━┓ ┏━━┓
// ┃┏━┓┃ ┃┏━━┛ ┃┏━┓┃ ┃┏┓┏┓┃   ┃┏━┓┃ ┃┏━┓┃ ┗┫┣┛
// ┃┗━┛┃ ┃┗━━┓ ┃┗━━┓ ┗┛┃┃┗┛   ┃┃ ┃┃ ┃┗━┛┃  ┃┃
// ┃┏┓┏┛ ┃┏━━┛ ┗━━┓┃   ┃┃     ┃┗━┛┃ ┃┏━━┛  ┃┃
// ┃┃┃┗┓ ┃┗━━┓ ┃┗━┛┃   ┃┃     ┃┏━┓┃ ┃┃    ┏┫┣┓
// ┗┛┗━┛ ┗━━━┛ ┗━━━┛   ┗┛     ┗┛ ┗┛ ┗┛    ┗━━┛

// function restAPIMenu() {
//     console.log("\nRest API Options:\n");
//     console.log(
//         "\nTweet\nReply\nSearch\nFollow\nGet Followers\n"
//     );
//     var selection = prompt('Type an option: ');
//     var fn = window[selection];
//     if (typeof fn === 'function') fn();
// }

//
//  tweet
//
function tweet(txt) {
    T.post('statuses/update', { status: txt}, function (error, data, response) {
        console.log("\ntweeting '" + txt + "'...\n");
        if (error) {
            console.log("oops, something goofed:\n");
            console.log(error);
        } else {
            console.log('tweeted "' + txt + '"\n');
            console.log(data);
        }
    })
}

//
//  reply to tweet
//
// function reply(txt, tweetId) {
//     var params = {
//         status: txt,
//         id: tweetId
//     };
//     T.post('statuses/update', params, function (error, data, response) {
//         console.log("\ntweeting '" + txt + "'...\n");
//         if (error) {
//             console.log("oops, something goofed:\n");
//             console.log(error);
//         } else {
//             console.log('tweeted "' + txt + '"\n');
//             console.log(data);
//         }
//     })
// }

//
//  search twitter for all tweets with parameters
//
// function search(hashtag, tweetCount) {
//     // search parameters
//     var params = {
//         q: '#' + hashtag,
//         count: tweetCount
//     };

//     T.get('search/tweets', params, function (error, tweets, response) {
//         console.log("\ngsearching for tweets...\n");
//         if (error) {
//             console.log("oops, something goofed:\n");
//             console.log(error);
//         } else {
//             console.log("tweet search results...\n");
//             console.log(tweets);
//             var results = {
//                 tweetId: tweets.id,
//                 username: tweets.screen_name,
//                 followers: tweets.followers,
//                 retweets: tweets.retweets,
//                 favorites: tweets.favorites
//             };
//             return results;
//         }
//     })
// }

//
//  get the list of user id's that follow @tweetinassbot
//
// function getFollowers() {
//     var params = {
//         screen_name: 'tweetinassbot'
//     };

//     T.get('followers/list', params, function (error, followers, response) {
//         console.log("\ngetting followers...\n");
//         if (error) {
//             console.log("oops, something goofed:\n");
//             console.log(error);
//         } else {
//             var followList = followers;
//             console.log("followers:\n");
//             console.log(followers);
//             return followers;
//         }
//     })
// }

//
//  follow user
//
// function follow(follower) {
//     params = {
//         screen_name: follower
//     };
//     T.post('friendships/create', params, function (error, data, response) {
//         console.log("following '" + params.screen_name + "'...\n");
//         if (error) {
//             console.log("oops, something goofed:\n");
//             console.log(error);
//         } else {
//             console.log("followed " + params.screen_name + "'\n");
//         }
//     })  
// }