#!/usr/bin/env bash -x

mkdir -p build

cat \
./src/scripts/*.js \
./src/scripts/*/**.js \
> ./build/index.js
