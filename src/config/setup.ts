// setup.ts
    // program loop functions
    
import twit from 'twit'
import config from './config.js'

// print welcome message to console
export function welcome() {
    console.log('\n');
    console.log('           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
    console.log('           ░░▀▀█▀▀ █░░░█ ░▀░ ▀▀█▀▀ ▀▀█▀▀ █▀▀ █▀▀█ █▀▀▄ █▀▀█ ▀▀█▀▀░░');
    console.log('           ░░░░█░░ █▄█▄█ ▀█▀ ░░█░░ ░░█░░ █▀▀ █▄▄▀ █▀▀▄ █░░█ ░░█░░░░');
    console.log('           ░░░░▀░░ ░▀░▀░ ▀▀▀ ░░▀░░ ░░▀░░ ▀▀▀ ▀░▀▀ ▀▀▀░ ▀▀▀▀ ░░▀░░░░');
    console.log('           ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
    console.log('\n');
}
 // export an initialized twit instance
export function init() {
    return new twit(config)
}
