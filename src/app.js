// app.js
    // NodeJS program entry point scripts

import * as rest from './api/rest.js'
import * as utility from './tools/utility.js'

const out = rest.getFollowers('tweetinassbot', false).then((data) => { 
    console.log(data) 
})

// const out = rest.search('u tellin me a shrimp fried').then((data) => { 
//     console.log(data) 
// })