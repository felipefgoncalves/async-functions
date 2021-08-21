// Require fs module for file operations
const fs = require("fs");

async function fn3() {
	const texto = "Hanna Pires";
	// Write the text to a file
	fs.writeFileSync("./data.txt", texto);

	// Read the text from the file
	const data = fs.readFileSync("./data.txt", "utf8");
	console.log("Function 3: Writting file 2: ", data.toString());
}

// Export the function for using in other files
module.exports = { fn3 };
