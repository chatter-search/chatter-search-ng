#!/usr/bin/env bash -x

mkdir -p ./build

cat \
./node_modules/babel-polyfill/dist/polyfill.js \
./node_modules/moment/moment.js \
./node_modules/angular/angular.js
