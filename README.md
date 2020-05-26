# twitterBot
an evil robot with a twitter account

## File Structure
- `src/` contains typescript modules
- `tsconfig.json` specifies typescript transpilation,
namely, where the transpiled files are piped out to
    - the default is `dist/`
- `package.json` specifies node execution and dependencies
    - running `npm start` to start the bot will call `build.sh`,
    as listed under the `"start"` object property
    - running `npm test` will execute the scripts in `dist/` without transpiling
- `build.sh` will transpile typescript modules and run the bot, all rolled into one

## API Keys
Twitter OAuth keys are required to run the bot, so you will need to provide them.
There is a dependency chain that should stem from `src/config/config.js`, so that's the file to be added.  Here is an example:
```javascript
export default {
    consumer_key: '...',
    consumer_secret: '...',
    access_token: '...',
    access_token_secret: '...',
};
```

The chain is as follows
- `src/config/config.js` (Root)
- `src/config/setup.ts`
- `src/api/[rest.ts, stream.ts]`
- `src/app.js` (Leaf / Node Entry-Point)