const Migrations = artifacts.require("Migrations");
const SupplyChain = artifacts.require("SupplyChain");

module.exports = async () => {
  const migration = await Migrations.new();
  Migrations.setAsDeployed(migration);
  const supply = await SupplyChain.new();
  SupplyChain.setAsDeployed(supply);
};