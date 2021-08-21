// Require fs module for file operations
const fs = require("fs");

async function fn2() {
    // Read file contents
	const data = fs.readFileSync("./data.txt");
    console.log("Function 2: Reading data.txt file from function 1: ", data.toString());
}

// Export the function for using in other files
module.exports = { fn2 };
