const{Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('34ce346728813839fbfa307ce520006c56044714aa548929850f9d8a784133c1');
const myWalletAddress = myKey.getPublic('hex');

let kevCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'dazas-public-key',10);
tx1.signTransaction(myKey);
kevCoin.addTransaction(tx1);


console.log('\nStarting the miner.');
kevCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of kevin is', kevCoin.getBalanceOfAddress(myWalletAddress));
//console.log('\nBalance of daza is', kevCoin.getBalanceOfAddress('dazas-public-key'));

kevCoin.chain[1].transactions[0].amount = 1;

console.log('Is chain valid?', kevCoin.isChainValid());