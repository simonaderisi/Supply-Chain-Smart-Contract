require("@nomiclabs/hardhat-truffle5");
require("@nomicfoundation/hardhat-chai-matchers");

Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("hardhat/config");
require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");
(0, config_1.task)("accounts", "Prints the list of accounts", (args, hre) => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield hre.ethers.getSigners();
    accounts.forEach((account) => {
        console.log(account.address);
    });
}));
(0, config_1.task)("balances", "Prints the list of ETH account balances", (args, hre) => __awaiter(void 0, void 0, void 0, function* () {
    const accounts = yield hre.ethers.getSigners();
    for (const account of accounts) {
        const balance = yield hre.ethers.provider.getBalance(account.address);
        console.log(`${account.address} has balance ${balance.toString()}`);
    }
}));

module.exports = {
  solidity: {
      version: "0.8.13",
  },
  networks: {
    localnet: {
      url: 'http://127.0.0.1:51343',//TODO: REPLACE <PORT> WITH THE PORT OF A NODE URI PRODUCED BY THE ETH NETWORK KURTOSIS PACKAGE
      // These are private keys associated with prefunded test accounts created by the eth-network-package
      //https://github.com/ethpandaops/ethereum-package/blob/main/src/prelaunch_data_generator/genesis_constants/genesis_constants.star
      accounts: [
        "bcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31",
        "53321db7c1e331d93a11a41d16f004d7ff63972ec8ec7c25db329728ceeb1710",
        "ab63b23eb7941c1251757e24b3d2350d2bc05c3c388d06f8fe6feafefb1e8c70",
        "5d2344259f42259f82d2c140aa66102ba89b57b4883ee441a8b312622bd42491",
        "27515f805127bebad2fb9b183508bdacb8c763da16f54e0678b16e8f28ef3fff",
        "7ff1a4c1d57e5e784d327c4c7651e952350bc271f156afb3d00d20f5ef924856",
      ],
    },
  },
};