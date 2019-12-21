var twit = require('twit')
import * as config from './config'

module.exports = {
    // print welcome message to console
    welcome: () => {
        console.log('\n');
        console.log('           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
        console.log('           ░░▀▀█▀▀ █░░░█ ░▀░ ▀▀█▀▀ ▀▀█▀▀ █▀▀ █▀▀█ █▀▀▄ █▀▀█ ▀▀█▀▀░░');
        console.log('           ░░░░█░░ █▄█▄█ ▀█▀ ░░█░░ ░░█░░ █▀▀ █▄▄▀ █▀▀▄ █░░█ ░░█░░░░');
        console.log('           ░░░░▀░░ ░▀░▀░ ▀▀▀ ░░▀░░ ░░▀░░ ▀▀▀ ▀░▀▀ ▀▀▀░ ▀▀▀▀ ░░▀░░░░');
        console.log('           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
        console.log('\n');
    },
    // export an initialized twit instance
    init: () => {
        return new twit(config)
    },
    hurry: () => {
        console.log('hurry')
    },
    hi: (str: string) => {
        console.log(str)
    }
}