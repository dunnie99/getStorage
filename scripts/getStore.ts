import { ethers, network } from "hardhat";
const Web3 = require('web3');
const web3 = new Web3("https://eth-mainnet.g.alchemy.com/v2/_iScTTmFgRiz_2zUUhQXVT1LAxBBxuSP");

async function main() {


    const Uniswap = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
    const BNBcontract = "0xB8c77482e45F1F44dE1745F52C74426C631bDD52";
    const Matic = "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0";
    const ShibaInu = "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE";
    const DaiStable ="0x6B175474E89094C44Da98b954EedeAC495271d0F";

    // Reading from Uniswap
    const Info = await web3.eth.getStorageAt(Uniswap, 3);
    console.log(`getUniswapStorageAt 1st position ${Info}`);
    const storageNum = await web3.utils.toDecimal(Info);
    console.log(storageNum);



    // Reading from BNB contract
    const Info1 = await web3.eth.getStorageAt(BNBcontract, 2);
    console.log(`getBNBStorageAt 2nd position ${Info1}`);
    //console.log('StorageAt 2nd postion: ' + web3.toDecimal(Info1));  //DONE
    const storageNum1 = await web3.utils.toDecimal(Info1);
    console.log(storageNum1);


    // Reading from Matic
    const Info2 = await web3.eth.getStorageAt(Matic, 6);
    console.log(`getMaticSTorageAt 6 position ${Info2}`);
    const storageNum2 = await web3.utils.toAscii(Info2);
    console.log(storageNum2);


    // Reading from Shiba
    const Info3 = await web3.eth.getStorageAt(ShibaInu, 4);
    console.log(`getShibaStorageAt 4th position ${Info3}`);
    const storageNum3 = await web3.utils.toAscii(Info3);          // DONE
    console.log(storageNum3);


    // Reading from Dai
    const Info4 = await web3.eth.getStorageAt(DaiStable, 3);
    console.log(`getDaiStorageAt 3rd position ${Info4}`);
    const storageNum4 = await web3.utils.toDecimal(Info4);      //DONE
    console.log(storageNum4);



    













}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

