var twit = require('twit')
var config = require('./config')

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
    init: () => {
        return new twit(config)
    }
}