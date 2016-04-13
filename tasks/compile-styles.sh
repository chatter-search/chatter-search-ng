#!/usr/bin/env bash -x

mkdir -p ./build

node-sass ./src/styles/index.scss \
| postcss "$@" -c ./postcss-options.json
