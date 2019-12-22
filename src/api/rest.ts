var setup = require('../config/setup')

// initialize twit instance
let T = setup.init()

module.exports = {
    // search for tweets matching query string
    search: (query: string): void => {
        // twit GET request
        T.get('search/tweets', {
            q: query
        }, (err, data, response) => {
            console.log(data)
        })
    },
    // get a specific tweet by ID string
    searchById: (tweetId: string): void => {
        // twit GET request
        T.get('statuses/show', {
            id: tweetId
        }, (err, data, response) => {

            // deep printing to find useful data
            const stuff = Object.values(data.extended_entities.video_info)
            for (let x of stuff) {
                console.log(x)
            }

            // console.log(data.extended_entities)

            // const keys = Object.values(data)
            // for (let k of keys) {
            //     console.log(k)
            // }
        })
    },
    // post a tweet composed of input text argument
    tweet: (text: string): void => {
        // twit POST request
        T.post('statuses/update', {
            status: text
        }, (err, data, response) => {
            // print POST request metadata
            console.log(`error: ${err}`)
            console.log(`data: ${data}`)
            console.log(`response: ${response}`)
            // confimation message
            console.log(`\ntweeted: ${text}\n`)
        })
    },
    getFollowers: (user: string): void => {
        T.get('followers/list', {
            screen_name: user
        }, (err, followers, response) => {
            console.log(`error: ${err}`)
            console.log(`followers: ${followers}`)
            console.log(`response: ${response}`)
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