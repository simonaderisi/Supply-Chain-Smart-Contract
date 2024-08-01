#!/bin/bash

# Stop all enclaves
kurtosis enclave stop *
kurtosis clean -a
kurtosis run github.com/ethpandaops/ethereum-package --args-file eth-network-params.yaml --image-download always