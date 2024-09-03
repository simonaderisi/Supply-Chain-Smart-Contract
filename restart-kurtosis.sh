#!/bin/bash

# Stop all enclaves
kurtosis clean -a
kurtosis --enclave eth-net run github.com/ethpandaops/ethereum-package --args-file $1 --image-download always

echo "Waiting 1 min for the net to be ready"
sleep 60
