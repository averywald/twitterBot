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
- `build.sh` will transpile typescript modules and run the bot, all rolled into one
