require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * 切记私钥不要上传到仓库 切记 切记
 */

module.exports = {
  solidity: "0.8.9",
  networks: {
    
    "optimismgoerli": {
       url: "https://opt-goerli.g.alchemy.com/v2/HuqickcdLeJ0MmjS7foK3W9R1RjQXpuR",
       accounts: [ "41b6a372e095fe84465e5102a7e4aef4a662539ac18c4cd907572fb5051b58c7" ]
    }
  }
};
