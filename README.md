# Chatter Search [![Build Status](https://travis-ci.org/chattersearch/chatter-search-ng.svg?branch=master)](https://travis-ci.org/chattersearch/chatter-search-ng)

> Chatter Search API client based on Angularjs.

## Demo

[chatter-search-ng.surge.sh](http://chatter-search-ng.surge.sh)

## Develop

### Requirements

- Linux or Mac OS.
- NodeJs with npm.
- Globally available [`live-server`][live-server].

> Windows should work too if it have bash shell support, though not guaranteed.

### Code conventions

- Standardjs for JavaScript linting
- ES6 syntax for JavaScript through Babel
- Sass as css preprocessor

### Set up

Install local dependencies and build.

- `npm install`
- `npm run build`


Run watchers and live reload.
Following commands has to be executed each in separate terminal.

- `npm run watch-styles`
- `npm run watch-scripts`
- `npm run watch-templates`
- `live-server ./build/`

[bower]: https://www.npmjs.com/package/bower
[standard]: https://www.npmjs.com/package/standard
[live-server]: https://www.npmjs.com/package/live-server
