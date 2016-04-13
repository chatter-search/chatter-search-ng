#!/usr/bin/env bash -x

version=${npm_package_version-$NPM_PACKAGE_VERSION}
mkdir -p ./build/templates
echo $version
cat ./src/index.html | \
sed -E "s/(<meta name=\"version\" content=\")[[:alnum:].]*(\">)/\1$version\2/" > \
./build/index.html

cp ./src/templates/* ./build/templates
