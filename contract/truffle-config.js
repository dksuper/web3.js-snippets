const HDWalletProvider = require('truffle-hdwallet-provider');

module.exports = {
    migrations_directory: "./migrations",
    networks: {
        development: {
            host: "localhost",
            port: 8545,
            network_id: "*" // Match any network id
        },
        ropsten: {
            provider: new HDWalletProvider('', "https://ropsten.infura.io/" + ''),
            network_id: 3, //ropsten
            gas: 3000000 //4612388
        },
        main: {
            provider: new HDWalletProvider('', "https://mainnet.infura.io/" + ''),
            network_id: 1, //mainnet
            gas: 5000000 //4612388
        }
    }
};
