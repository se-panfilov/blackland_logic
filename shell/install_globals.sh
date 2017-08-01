#!/usr/bin/env bash

#better to remove node.js first:
#https://stackoverflow.com/a/11178106/930170


#cd ../
#curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
#nvm use &&
npm install yarn -g &&
yarn global add npm-check-updates &&
yarn global add flow-scripts &&
yarn global add flow-typed &&

echo "DONE"