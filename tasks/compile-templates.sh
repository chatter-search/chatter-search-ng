#!/usr/bin/env bash -x

mkdir -p ./build/templates

cp ./src/index.html ./build
cp ./src/templates/* ./build/templates
