# ! /bin/bash

git reset --hard origin/server
git clean -f
git pull origin server
cnpm install
npm stop
EGG_SERVER_ENV=prod npm start
