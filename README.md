# Gift List - Merkle Tree Zero-knowledge proof

This project implements Zero-knowledge proof to verify whether a `name` given by the client is in the Nice List (`niceList.json`) and deserves a gift.

The keccak256 hash function produces a 32-byte (256-bit) hash output, which is used to calculate the Merkle root hash of the tree.

## Methods

The `getRoot()` method calculates the Merkle root hash of the tree by concatenating the two child nodes of the root node and applying the keccak256 hash function.

The `getProof()` method takes an index and optional layer and proof arguments, and returns a proof object for the corresponding leaf node in the tree. The proof object contains an array of Merkle nodes and their positions in the tree, which can be used to verify the membership of the leaf node in the tree.

The `_getRoot()` method is a private function that is used internally by the getRoot() method to compute the Merkle root hash of the tree.

## Installation

To get started with this repository, clone it and run `npm install` in the top-level directory to install the dependencies.

There are three folders in this repository:

## Client

It is the _prover_ in this system.

You can run the client from the top-level directory with `node client/index <name>`.
The name parameter will be sent to the server for verification if it is in the `MERKLE_ROOT`.

For example, run `node client/index Mr. Jennifer Bednar` to verify if Mr. Jennifer Bednar is in the `MERKLE_ROOT`.

The client sends an HTTP request to the server to prove that a name is in the `MERKLE_ROOT`.

## Server

It is the _verifier_ in this system.

You can run the server from the top-level directory with `node server/index`. The express server is hosted on port 1225 and responds to the client's request.

The server verifies that the `name` passed by the client is in the `MERKLE_ROOT`.

If the name is found, the server sends a gift to the client.

## Utils

- The `niceList.json` contains the names of people who deserve a gift this year. You can modify this file to add or remove names.

- The `example.js` shows how to generate a root, generate a proof, and verify that a value is in the root using the proof. Run `node example.js` from the top-level folder to try it out.

- The `MerkleTree.js` has been modified so that any crypto type conversion is not required. You can import this in your client/server

- The `verifyProof.js` function can be used to prove a name is in the merkle root, as show in the example.
