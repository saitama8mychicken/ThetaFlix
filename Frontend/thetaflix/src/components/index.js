import address from "./assets/contractAddress";
const { ethers } = require("ethers");
const provider = new ethers.providers.JsonRpcProvider("https://eth-rpc-api-testnet.thetatoken.org/rpc");
const chainID = 365; // for the Theta Mainnet
const abi = require("./assets/contractAbi.json");

// const address = require("./assets/contractAddress");

const contract = new ethers.Contract(address, abi, provider);

async function GetContractNFTs() {
  const totalSupply = await contract.totalSupply();
  const nfts = [];

  for (let i = 0; i < totalSupply; i++) {
    const uri = await contract.tokenURI(i);
    nfts.push(uri);
  }
console.log(nfts);
  return nfts ;
}

export default GetContractNFTs;
