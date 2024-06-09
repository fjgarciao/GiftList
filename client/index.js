const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';
const merkleTree = new MerkleTree(niceList);

async function main(name) {
  const index = niceList.findIndex(n => n === name);
  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    "name": name,
    "proof": merkleTree.getProof(index)
  });

  console.log({ gift });
}

var arguments = process.argv.slice(2);
var name = arguments[0];
main(name);
