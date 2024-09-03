#!/bin/bash 

echo "Please update now 'hardhat.config.js' with a correct RPC URL"
read -p "Press ENTER to continue"

echo "NET PARAMS: $1" >> timing-test-results.txt
# requires time to be installed
/usr/bin/time -o timing-test-results.txt -a -f "real: %E\nuser: %U\nsystem: %S" npx hardhat test
