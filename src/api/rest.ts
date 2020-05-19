// rest.ts
    // REST API functions

import * as setup from '../config/setup.js'
import * as utility from '../tools/utility.js'

// initialize twit instance
let T = setup.init()

/**
 * @todo wrap in promise / convert to async/await protocol
 * 
 * @param query string to search for in tweets
 * @returns Object
 */
export function search(query: string): Object {
    // twit GET request
    let obj = T.get('search/tweets', {
        q: query
    }, (err, data, response) => {
        return data
    })
    return obj
}

/**
 * @todo eliminate side-effects ???
 * 
 * @param tweetId string identifier of a single tweet
 * @returns nothing, SIDE EFFECT
 */
export function searchById(tweetId: string): void {
    // twit GET request
    T.get('statuses/show', {
        id: tweetId
    }, (err, data, response) => {
        // build JSON object file name from twitter API ID
        let str = `dataCache/tweet${data.id}.json`
        // export JSON to ../dataCache/
        utility.exportData(str, data)
    })
}

/**
 * @todo eliminate side-effects ???
 * 
 * @param text string to tweet
 * @returns nothing, SIDE EFFECT function
 */
export function tweet(text: string): void {
    // twit POST request
    T.post('statuses/update', {
        status: text
    }, (err, data, response) => {
        // log request response
        utility.printResponse(err, data, response)
    })
}

/**
 * @param user twitter 'screen_name' to fetch follower list
 * @param willExport triggers the function to export data to external file
 * @returns Promise<Object> containing follower data as JSON
 */
export async function getFollowers(user: string, willExport: Boolean): Promise<Object> {
    // store data in promise & wait for it to complete
    const data = await new Promise((resolve, reject) => {
        // twitter API call
        T.get('followers/list', { screen_name: user }, (err, res, fol) => {
            // reject request error(s)
            if (err) reject(err)
            // resolve successful request promise
            else {
                // if function flagged to export API data
                if (willExport) {
                    // export JSON object to ../dataCache/
                    utility.exportData(`dataCache/${user}followers.json`, fol)
                }
                // resolve the promise
                resolve(fol)
            }
        })
    })
    return data
}

/**
 * @todo eliminate side-effects ??
 * 
 * @param user twitter 'screen_name' string of user to follow
 * @returns nothing
 */
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