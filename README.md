> Chatter Search API client based on Angularjs.

# Hosted

[chatter-search.surge.sh](http://chatter-search.surge.sh)

# Develop

## Requirements

- Linux or Mac OS.
- NodeJs with npm.
- Globally available [`bower`][bower], [`standard`][standard] and [`live-server`][live-server].

> Windows should work too if it have bash shell support, though not guaranteed.

## Code conventions

- Standardjs for JavaScript linting
- ES6 syntax for JavaScript through Babel
- Sass as css preprocessor

## Set up

Install local dependencies.

- `npm install && bower install`
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
