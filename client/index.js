const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
	if (process.argv.length > 2) {
		// TODO: how do we prove to the server we're on the nice list?

		//  retrieve name from user input
		const name = process.argv.slice(2, process.argv.length).join(" ");

		// create the merkle tree for the whole nice list
		const merkleTree = new MerkleTree(niceList);
		const index = niceList.findIndex((n) => n === name);
		const proof = merkleTree.getProof(index);

		console.log("Your input :", name);

		const { data: gift } = await axios.post(`${serverUrl}/gift`, {
			// TODO: add request body parameters here!
			proof: proof,
			name: name,
		});

		console.log({ gift });
	} else {
		console.log("Please input a name");
	}
}

main();
