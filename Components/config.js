import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import userDbAbi from '../components/userdb.json';
import tokenAbi from '../components/erc20abi.json'


export const client = ipfsHttpClient('https://192.168.1.59:5001');
export const userdbaddress = '0xE8991333919698C702A622940cbCaa323C6C785C';
const rpc = 'https://songbird.towolabs.com/rpc';
const updaterwallet = '709bb4ba697ffa7b4aa825e3fc9c4538319c6235cdccee677a80975a80d13329';
const provider = new ethers.providers.JsonRpcProvider(rpc);
const updater = new ethers.Wallet(updaterwallet, provider);
export const usercontract = new ethers.Contract(userdbaddress, userDbAbi, updater);
export const nftcontract = "0x51b74F4d7C2c3A6ad3E87998a2Ecc95c2b32FFc6";
export const tokenaddress = "0x5cd02c2a7971c0b6bfc9c51322787622fef53b5b";
export const tokencontract = new ethers.Contract(tokenaddress, tokenAbi, updater)

