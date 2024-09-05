var SupplyChain = artifacts.require("SupplyChain");


function getRandomInt(max){
  return Math.floor(Math.random() * max) + 1;
}

contract("SupplyChain", function (accounts) {
  // Dichiarazione di variabili
  var stockUnit = 1;
  const productCode = 1;
  var ownerID = accounts[0];
  const originFarmName = "Rahul Raj";
  const originFarmInformation = "Anil Kumar";
  const originFarmLatitude = "-23.43422";
  const originFarmLongitude = "213.341243";
  var productID = productCode + stockUnit;
  const productNotes = "Wheat for export";
  const productPrice = web3.utils.toWei("0.02", "ether");
  var itemState = 0;
  const farmer_1 = accounts[1];

  console.log("<----------------ACCOUNTS----------------> ");
  console.log("Farmer 1: accounts[0] ", accounts[0]);
  console.log("Farmer 2: accounts[1] ", accounts[1]);
  console.log("Farmer 3: accounts[2] ", accounts[2]);
  console.log("Farmer 10: accounts[11] ", accounts[11]);

  console.log("<-------TESTING CONTRACT FUNCTIONS------->");

  // Test con più richieste simultanee e misurazione del tempo
  it("Testing smart contract function produceItem() with multiple concurrent requests", async () => {
    const supplyChain = await SupplyChain.deployed();

    // Aggiungi l'indirizzo del farmer al farmerRole
    await supplyChain.addFarmer(farmer_1);
    await supplyChain.addFarmer(accounts[2]);
    await supplyChain.addFarmer(accounts[3]);
    await supplyChain.addFarmer(accounts[4]);
    await supplyChain.addFarmer(accounts[5]);
    await supplyChain.addFarmer(accounts[6]);
    await supplyChain.addFarmer(accounts[7]);
    await supplyChain.addFarmer(accounts[8]);
    await supplyChain.addFarmer(accounts[9]);
    await supplyChain.addFarmer(accounts[10]);
    await supplyChain.addFarmer(accounts[11]);

    // Numero di richieste simultanee
    const numRequests = 10;
    let promises = [];

    // Inizia la misurazione del tempo
    console.time("Time for producing items");

    for (let i = 0; i < numRequests; i++) {
      const currentProductCode = productCode + i;

      var random_farmer = getRandomInt(11);

      // Crea una promessa per ogni transazione
      const promise = supplyChain.produceItemByFarmer(
        currentProductCode,
        originFarmName,
        originFarmInformation,
        originFarmLatitude,
        originFarmLongitude,
        productNotes,
        productPrice,
        { from: accounts[random_farmer] }
      );
      promises.push(promise);
    }

    // Esegui tutte le promesse in parallelo
    await Promise.all(promises);

    // Termina la misurazione del tempo
    console.timeEnd("Time for producing items");
  });
});
