console.clear();
require("dotenv").config();
const {
	AccountId,
	PrivateKey,
	Client,
	FileCreateTransaction,
	ContractCreateTransaction,
	ContractExecuteTransaction,
	ContractCallQuery,
	ContractFunctionParameters,
	Hbar,
} = require("@hashgraph/sdk");
const fs = require("fs");

// Configure accounts and client

async function main() {
	// Import the compiled contract bytecode
	// Create a file on Hedera and store the bytecode
	// Instantiate the smart contract
	// Query the contract to check changes in state variable
	// Call contract function to update the state variable
	// Query the contract to check changes in state variable
}
main();
