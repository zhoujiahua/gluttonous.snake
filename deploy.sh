#!/bin/bash
rm -rf ./docs/* && yarn build && cp -a ./dist/* ./docs/ && sh ./commit.sh