#!/usr/bin/env bash -x

mkdir -p ./build

babel ./src/scripts --source-maps |\
printf ";(function(){ $(cat -)\n})();" > ./build/index.js

