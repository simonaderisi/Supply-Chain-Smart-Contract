const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const SupplyChainModule = buildModule("SupplyChainModule", (m) => {
  const supplyChain = m.contract("SupplyChain");

  return { supplyChain };
});

module.exports = SupplyChainModule;