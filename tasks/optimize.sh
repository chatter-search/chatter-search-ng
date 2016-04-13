#!/usr/bin/env bash -e

npm run compile-styles -- -u cssnano & \
./tasks/compile-components.sh | uglifyjs -o ./build/lib.js & \
./tasks/compile-scripts.sh | ng-annotate -a - | uglifyjs -o ./build/index.js & \
npm run compile-templates &

wait

exit
