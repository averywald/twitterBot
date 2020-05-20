#!/usr/bin/env bash
: '
this is the cache-management test script

it will create a dummy folder and populate it with files to test
cache-management processes

it is run by executing `npm run test-cache`

cache-management functions are currently in ./src/utility.ts
'
# dummy cache directory
DIR=./fakeCache/

# check for fake cach directory
if [ ! -d "$DIR" ]; then
    # doesn't exist, must be created
    echo creating $DIR ...
    mkdir ./fakeCache/
fi

# check if fake cache is empty
if [ ! "$(ls -A $DIR)" ]; then
    # copy real cache content to dummy cache
    echo populating $DIR
    cp -a ./cache/. ./fakeCache/
fi

# execute cache-management operation on dummy cache
ls -la $DIR
# ...
    # call utility.destroyCache(...) from CLI
        # arguments ???

# cleanup test assets
echo cleaning up test assets ...
# delete dummy cache
rm -rf $DIR