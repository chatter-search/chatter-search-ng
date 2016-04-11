#!/usr/bin/env bash -x

mkdir -p ./build

babel ./src/scripts |\
echo ";(function(){$(cat -)}();" > ./build/index.js

