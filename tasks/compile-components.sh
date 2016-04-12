#!/usr/bin/env bash -x

mkdir -p build

cat \
./node_modules/babel-polyfill/dist/polyfill.js \
./bower_components/angular/angular.js \
> build/lib.js
