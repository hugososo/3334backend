var DigitalAssetsMarket = artifacts.require("./DigitalAssetsMarket.sol");

module.exports = function(deployer) {
  deployer.deploy(DigitalAssetsMarket);
};
