#!/usr/bin/env bash -x

mkdir -p build

cat \
./bower_components/angular/angular.js \
> build/components.js
