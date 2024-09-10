#!/bin/bash 

echo "Please update now 'hardhat.config.js' with a correct RPC URL"
read -p "Press ENTER to continue"

echo "NET PARAMS: $1" >> test_results_2.txt
# requires time to be installed
# /usr/bin/time -o test_results_2.txt -a -f "real: %E\nuser: %U\nsystem: %S" npx hardhat test
gtime -o test_results_2.txt -a -f "real: %E\nuser: %U\nsystem: %S" npx hardhat test --network localnet

