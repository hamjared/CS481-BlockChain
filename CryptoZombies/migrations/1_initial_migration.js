const Migrations = artifacts.require("Migrations");
const ZombieOwnership = artifacts.require("ZombieOwnership");
const ZombieAttack = artifacts.require("ZombieAttack");
const ERC721 = artifacts.require("ERC721");
const ZombieHelper = artifacts.require("ZombieHelper");
const ZombieFeeding = artifacts.require("ZombieFeeding");
const ZombieFactory = artifacts.require("ZombieFactory");
const Ownable = artifacts.require("Ownable");
const SafeMath = artifacts.require("SafeMath");
const KittyInterface = artifacts.require("KittyInterface");


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ZombieOwnership);
  deployer.deploy(ZombieAttack);
  deployer.deploy(ZombieHelper);
  deployer.deploy(ZombieFeeding);
  deployer.deploy(ZombieFactory);
  deployer.deploy(SafeMath);
};
