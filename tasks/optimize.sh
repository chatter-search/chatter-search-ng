#!/usr/bin/env bash -x

npm run compile-styles -- -u cssnano & \
./tasks/compile-scripts.sh | uglifyjs -o ./build/index.js & \
./tasks/compile-components.sh | uglifyjs -o ./build/lib.js & \
npm run compile-templates &

wait

exit
