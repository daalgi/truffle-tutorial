const Helloworld = artifacts.require("Helloworld");
// const HelloworldPermanent = artifacts.require("HelloworldPermanent");

// Simple contract
module.exports = function (deployer) {
  deployer.deploy(Helloworld, "Hello world constructor");
};

// Tutorial 2/4: Contracts interactions
// module.exports = function (deployer) {
//   deployer.deploy(Helloworld, "Hello world constructor").then(async () => {
//     let instance = await Helloworld.deployed();
//     let message = instance.message();
//     return deployer.deploy(HelloworldPermanent, message);
//   });
// };