import address from "../assests/contractAddress";
import { ethers } from "ethers";
const abi = require("../assests/contractAbi.json");

const provider = new ethers.providers.JsonRpcProvider(
  "https://eth-rpc-api-testnet.thetatoken.org/rpc"
);

async function GetContractNFTs() {
  const contract = new ethers.Contract(address, abi, provider);
  const totalSupply = await contract.totalSupply();
  const nfts = [];

  for (let i = 0; i < totalSupply.toNumber(); i++) {
    const uri = await contract.tokenURI(i);
    nfts.push(uri);
  }

  return nfts;
}


export { GetContractNFTs };
