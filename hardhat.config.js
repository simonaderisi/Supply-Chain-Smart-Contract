require("@nomiclabs/hardhat-truffle5");

module.exports = {
  // When not specified default network is hardhat
  defaultNetwork: "localnet",
  solidity: {
      version: "0.8.13",
  },
  networks: {
    hardhat: {
    },
    localnet: {
      url: 'http://127.0.0.1:32797',
      // Prefunded account provided by the kurtosis package
      accounts: [
        "bcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31",
        "39725efee3fb28614de3bacaffe4cc4bd8c436257e2c8bb887c4b5c4be45e76d",
        "53321db7c1e331d93a11a41d16f004d7ff63972ec8ec7c25db329728ceeb1710",
        "ab63b23eb7941c1251757e24b3d2350d2bc05c3c388d06f8fe6feafefb1e8c70",
        "5d2344259f42259f82d2c140aa66102ba89b57b4883ee441a8b312622bd42491",
      ],
    },
  },
};