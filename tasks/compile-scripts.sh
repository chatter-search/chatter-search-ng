#!/usr/bin/env bash -x

mkdir -p ./build

babel ./src/scripts --source-maps |\
echo ";(function(){ $(cat -) })();" > ./build/index.js

