const KycBlockChain = artifacts.require("./KycBlockChain.sol");

module.exports = function (deployer) {
  deployer.deploy(KycBlockChain);
};
