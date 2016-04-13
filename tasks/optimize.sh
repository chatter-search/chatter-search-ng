#!/usr/bin/env bash -x

npm run compile-styles -- -u cssnano & \
./tasks/compile-scripts.sh | ng-annotate -a - | uglifyjs -o ./build/index.js & \
./tasks/compile-components.sh | ng-annotate -a - | uglifyjs -o ./build/lib.js & \
npm run compile-templates &

wait

exit
