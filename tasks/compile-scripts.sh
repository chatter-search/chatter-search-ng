#!/usr/bin/env bash

mkdir -p ./build

babel ./src/scripts --source-maps |\
printf ";(function(){ $(cat -)\n})();"
