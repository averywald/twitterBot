// rest.ts
    // REST API functions

// var setup = require('../config/setup')
import { welcome, init } from '../config/setup.js'
// var utility = require('../tools/utility')
import { exportData, printResponse } from '../tools/utility.js'

// initialize twit instance
let T = init()

export function test() {
    console.log("test requre link");
}

// search for tweets matching query string
export function search(query: string): object {
    // twit GET request
    let obj = T.get('search/tweets', {
        q: query
    }, (err, data, response) => {
        // console.log(data)
        return data
    })
    return obj
}

// get a specific tweet by ID string
export function searchById(tweetId: string): void {
    // twit GET request
    T.get('statuses/show', {
        id: tweetId
    }, (err, data, response) => {
        // build JSON object file name from twitter API ID
        let str = `dataCache/tweet${data.id}.json`
        // export JSON to ../dataCache/
        exportData(str, data)
    })
}

// post a tweet composed of input text argument
export function tweet(text: string): void {
    // twit POST request
    T.post('statuses/update', {
        status: text
    }, (err, data, response) => {
        // log request response
        printResponse(err, data, response)
    })
}

export function getFollowers(user: string): Object {
    let data = T.get('followers/list', {
        screen_name: user
    }, (err, followers, response) => {
        // log request response
        printResponse(err, followers, response)
        // export JSON object to ../dataCache/
        exportData(`dataCache/${user}followers.json`, followers)
    })
    return data
}

export function follow(user: string): void {
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