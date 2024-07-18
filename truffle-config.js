const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const MNEMONIC_KEY = process.env.MNEMONIC_KEY;
const RPC_URL = process.env.INFURA_API;
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop:{
      port: 8545
    },
    mumbai: {
      provider: () => new HDWalletProvider(MNEMONIC_KEY, RPC_URL),
      network_id: 80001,
      confirmations: 3,
      timeoutBlocks: 200,
      skipDryRun: true,
      gas: 6000000,
      gasPrice: 10000000000,
    },
  },
  compilers: {
    solc: {
      version: "0.8.13",
    },
  },
};
