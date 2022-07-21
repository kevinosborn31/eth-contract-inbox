const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractCount = 1;
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
const compiledContracts = solc.compile(source, contractCount).contracts;

module.exports = compiledContracts[':Inbox'];