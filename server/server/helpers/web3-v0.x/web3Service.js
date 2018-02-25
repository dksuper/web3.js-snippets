import { default as Web3 } from 'web3';
import { default as contract } from 'truffle-contract';

// 1 extra folder up because it's located in dist/ folder
import artifacts from '../../../../../contract/build/contracts/Coin.json';

export function getWeb3Instance() {
    return new Web3(new Web3.providers.HttpProvider(process.env.default_net));
}

export function getContract() {
    return contract(artifacts);
}

export function getAbi() {
    return artifacts.abi;
}

export function getNetworkAddress() {
    const tempKey = Object.keys(artifacts.networks)[0];
    return artifacts.networks[tempKey].address;
}
