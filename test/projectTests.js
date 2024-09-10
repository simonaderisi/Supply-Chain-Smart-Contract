var SupplyChain = artifacts.require("SupplyChain");

//Returns a number between 1 and max
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
  console.log("Farmer 1: accounts[1] ", accounts[1]);
  console.log("Farmer 2: accounts[2] ", accounts[2]);
  console.log("Farmer 10: accounts[10] ", accounts[10]);

  console.log("<-------TESTING CONTRACT FUNCTIONS------->");

  // Test with multiple requests
  it("Testing smart contract function produceItem() with multiple concurrent requests", async () => {
    const supplyChain = await SupplyChain.deployed();

    // Add farmer addresses
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

    // Number of cuncurrent requests
    const numRequests = 20;

    //push all the requests (each one from a random farmer)
    for (let i = 0; i < numRequests; i++) {
      const currentProductCode = productCode + i;

      var random_farmer = getRandomInt(10);
      console.log(random_farmer);
      //create the request from the random farmer
      supplyChain.produceItemByFarmer(
        currentProductCode,
        originFarmName,
        originFarmInformation,
        originFarmLatitude,
        originFarmLongitude,
        productNotes,
        productPrice,
        { from: accounts[random_farmer] }
      );
    }
    //check if the requests are present in the blocks
    for (let i = 0; i < numRequests; i++) {
      const currentProductCode = productCode + i;
      var eventEmitted = false;
      while(eventEmitted == false){
        const resultBufferOne = await supplyChain.fetchItemBufferOne.call(
        currentProductCode
      );
        if (resultBufferOne[1] == currentProductCode){
          eventEmitted = true;
          console.log("trovato " + i);
        }
      }
    }
  }
).timeout(1000000);
});
