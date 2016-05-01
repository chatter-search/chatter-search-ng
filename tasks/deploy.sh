#!/usr/bin/env bash -x

if [ ${CI_BUILD_TAG+x} ];
    then npm run optimize && npm run surge;
    else echo 'Not a tag commit, will not deploy.';
fi
