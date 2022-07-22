const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3Constructor = require('web3');
const { interface, bytecode } = require('./compile');

const ACCOUNT_MNEMONIC = 'math behind race patrol squeeze candy face place club sell tragic beyond';
const NETWORK_LINK = 'https://rinkeby.infura.io/v3/0ba0bff437f749679b5de9334eef7d8a'
const INITIAL_STRING = 'Hi there!';

const provider = new HDWalletProvider(
    ACCOUNT_MNEMONIC,
    NETWORK_LINK
);

const web3 = new Web3Constructor(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0])

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode, arguments: [INITIAL_STRING] })
        .send({ gas: '1000000', from: accounts[0] })

    console.log('Contract deployed to', result.options.address);

    provider.engine.stop();
};

deploy(); 