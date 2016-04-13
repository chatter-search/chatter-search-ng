#!/usr/bin/env bash -x

npm run compile-styles & \
npm run compile-scripts & \
npm run compile-components & \
npm run compile-templates &

wait
