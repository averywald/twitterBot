var twit = require('twit')
var setup = require('../config/setup.ts')

let T = setup.init()

module.exports = {
    search: (query) => {
        T.get('search/tweets', {
            q: query
        }, (err, data, response) => {
            console.log(data)
        })
    }
}

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
// function tweet(txt) {
//     T.post('statuses/update', { status: txt }, function (error, data, response) {
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