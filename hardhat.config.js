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

      url: 'http://127.0.0.1:53419',//TODO: REPLACE <PORT> WITH THE PORT OF A NODE URI PRODUCED BY THE ETH NETWORK KURTOSIS PACKAGE
      // These are private keys associated with prefunded test accounts created by the eth-network-package
      //https://github.com/ethpandaops/ethereum-package/blob/main/src/prelaunch_data_generator/genesis_constants/genesis_constants.star
      accounts: [
        "bcdf20249abf0ed6d944c0288fad489e33f66b3960d9e6229c1cd214ed3bbe31",
        "39725efee3fb28614de3bacaffe4cc4bd8c436257e2c8bb887c4b5c4be45e76d",
        "53321db7c1e331d93a11a41d16f004d7ff63972ec8ec7c25db329728ceeb1710",
        "ab63b23eb7941c1251757e24b3d2350d2bc05c3c388d06f8fe6feafefb1e8c70",
        "5d2344259f42259f82d2c140aa66102ba89b57b4883ee441a8b312622bd42491",
        "27515f805127bebad2fb9b183508bdacb8c763da16f54e0678b16e8f28ef3fff",
        "7ff1a4c1d57e5e784d327c4c7651e952350bc271f156afb3d00d20f5ef924856",
        "3a91003acaf4c21b3953d94fa4a6db694fa69e5242b2e37be05dd82761058899",
        "bb1d0f125b4fb2bb173c318cdead45468474ca71474e2247776b2b4c0fa2d3f5",
        "850643a0224065ecce3882673c21f56bcf6eef86274cc21cadff15930b59fc8c",
        "94eb3102993b41ec55c241060f47daa0f6372e2e3ad7e91612ae36c364042e44",
        "daf15504c22a352648a71ef2926334fe040ac1d5005019e09f6c979808024dc7",
      ],
    },
  },
};