// Require fs module for file operations
const fs = require("fs");

async function fn1() {
	const texto = "Felipe Fernandes";

	// Write the string to a file
	fs.writeFileSync("./data.txt", texto);

	// Read the file
	const data = fs.readFileSync("./data.txt", "utf8");

	console.log("Function 1: Writting file data.txt: ", data.toString());
}

// Export the function for using in other files
module.exports = { fn1 };
