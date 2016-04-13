#!/usr/bin/env bash -x

npm run compile-styles -- -u cssnano & \
bash ./tasks/compile-components.sh | uglifyjs -o ./build/lib.js & \
bash ./tasks/compile-scripts.sh | ng-annotate -a - | uglifyjs -o ./build/index.js & \
npm run compile-templates &

wait
