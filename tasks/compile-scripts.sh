#!/usr/bin/env bash

mkdir -p ./build
compress=$1

babel ./src/scripts --source-maps |\
printf ";(function(){ $(cat -)\n})();"
