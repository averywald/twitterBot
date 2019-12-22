#!/usr/bin/env bash

: '
this is the build script.
it will transpile the typescript files in ./src/
and output them into ./dist/

transpiling specifics are listed in tsconfig.json

node execution specifics are listed in package.json
'

# transpile typescript files
tsc --build
# run the bot
node dist/app.js