#!/usr/bin/env bash -x

mkdir -p build

cat \
./src/scripts/* \
> ./build/index.js
