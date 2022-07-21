const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');

// Create new web3 instance with ganache
const web3 = new Web3(ganache.provider());