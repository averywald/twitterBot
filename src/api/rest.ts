var setup = require('../config/setup')
var utility = require('../tools/utility')

// initialize twit instance
let T = setup.init()

module.exports = {
    // search for tweets matching query string
    search: (query: string): object => {
        // twit GET request
        let obj = T.get('search/tweets', {
            q: query
        }, (err, data, response) => {
            // console.log(data)
            return data
        })
        return obj
    },
    // get a specific tweet by ID string
    searchById: (tweetId: string): void => {
        // twit GET request
        T.get('statuses/show', {
            id: tweetId
        }, (err, data, response) => {
            // build JSON object file name from twitter API ID
            let str = `extras/tweet${data.id}.json`
            // export JSON to ./extras/
            utility.export(str, data)
        })
    },
    // post a tweet composed of input text argument
    tweet: (text: string): void => {
        // twit POST request
        T.post('statuses/update', {
            status: text
        }, (err, data, response) => {
            // log request response
            utility.printResponse(err, data, response)
        })
    },
    getFollowers: (user: string): void => {
        T.get('followers/list', {
            screen_name: user
        }, (err, followers, response) => {
            // log request response
            utility.printResponse(err, followers, response)
            utility.export(`extras/followers.json`, followers)
        })
    },
    follow: (user: string): void => {
        T.post('friendships/create', {
            screen_name: user
        }, (error, data, response) => {
            console.log("following '" + user + "'...\n");
            if (error) {
                console.log("oops, something goofed:\n");
                console.log(error);
            } else {
                console.log("followed " + user + "'\n");
            }
        })  
    }
}