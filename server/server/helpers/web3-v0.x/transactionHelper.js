// Imports - Dependencies
import lightwallet from 'eth-lightwallet';
import tx from 'ethereumjs-tx';

// Imports - own classes
import {getAbi, getNetworkAddress, getWeb3Instance} from './web3Service';

// Web3 instance
const web3 = getWeb3Instance();

// Constants
const publicKey = process.env.admin_publicKey;
const privateKey = process.env.admin_privateKey;
const MAX_ETH = 50000;
const contractAddress = getNetworkAddress();

const txutils = lightwallet.txutils;

export class transactionHelper {

  initializeAccount = async (method = 'addUser', params = []) => {
    const batch = web3.createBatch();
    batch.add(this.interactContract(method, params, true));
    batch.add(this.sendEther(params[0], true));
    batch.execute();
    return batch;
  };

  interactContract = async (method = undefined, params = [], batch = false) => {
    if (!method) return new Promise.reject('No method was passed');

    // TxOptions
    // TODO set gasLimit
    const txOptions = {
      nonce: await web3.eth.getTransactionCount(publicKey, "pending"),
      gasLimit: 99999,
      gasPrice: web3.eth.gasPrice.c[0],
      to: contractAddress
    };

    // Create function - getting the ABI, choosing the function, adding parameters, adding txOptions
    const rawTx = txutils.functionTx(getAbi(), method, params, txOptions);

    // Send the transactions in batch
    if(batch) return this.sendRaw(rawTx);

    // Send the transaction
    const txResult = await this.sendRaw(rawTx);
    if (!txResult) return this.handleError('An error occurred', txResult);
    else return this.handleSuccess(txResult);
  };

  // Send Ether with the use of sendRaw
  sendEther = async (receiver, batch = false) => {
    let nonce = await web3.eth.getTransactionCount(publicKey, "pending");
    if(batch) nonce += 1;

    // RawTx (Not only the options, because we don't call a method, but just transfer Ether)
    const txOptions = {
      nonce: nonce,
      gasLimit: 21000,
      gasPrice: web3.eth.gasPrice.c[0],
      to: receiver,
      value: MAX_ETH
    };

    const rawTx = txutils.valueTx(txOptions);

    // Send the transactions in batch
    if(batch) return this.sendRaw(rawTx);

    // Send the transaction
    const txResult = await this.sendRaw(rawTx);
    if (!txResult) return this.handleError('An error occurred', txResult);
    else return this.handleSuccess(txResult);
  };

  // Signing and sending the Raw Transaction to the blockchain
  sendRaw = (rawTx) => {
    // Retreive the PK and convert it to hexidecimals
    const privateKeyHex = new Buffer(privateKey, 'hex');

    // Create a transaction (Ethereumjs-tx) with the rawTransaction data
    const transaction = new tx(rawTx);

    // Sign the transaction with the hexidecimal privateKey
    transaction.sign(privateKeyHex);

    // Serialize the tx to hexidecimals
    const serializedTx = transaction.serialize().toString('hex');

    // Return the promise to add to the batch of requests
    return web3.eth.sendRawTransaction('0x' + serializedTx);
  };

  handleError = (error) => {
    return new Promise.reject(error);
  };

  handleSuccess = (success) => {
    return new Promise.resolve(success);
  }
}
