const Migrations = artifacts.require("Migrations");
const ZombieOwnership = artifacts.require("ZombieOwnership");
const ZombieAttack = artifacts.require("ZombieAttack");
const ZombieHelper = artifacts.require("ZombieHelper");
const ZombieFeeding = artifacts.require("ZombieFeeding");
const ZombieFactory = artifacts.require("ZombieFactory");
// interface contracts do not and cannot be migrated. (ownable, erc721, kittyinterface, safemath)


module.exports = function(deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(ZombieOwnership);
  deployer.deploy(ZombieAttack);
  deployer.deploy(ZombieHelper);
  deployer.deploy(ZombieFeeding);
  deployer.deploy(ZombieFactory);
  deployer.deploy(SafeMath);
};
