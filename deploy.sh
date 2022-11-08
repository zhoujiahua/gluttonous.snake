#!/bin/bash
rm -rf ./docs/* && yarn build 
cp -a ./dist/* ./docs/
cp CNAME ./docs/
sh ./commit.sh