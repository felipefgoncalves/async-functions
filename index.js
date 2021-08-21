// Importing the necessary modules
const function1 = require("./function1");
const function2 = require("./function2");
const function3 = require("./function3");

async function main() {
	// As we are using async/await, we need to use await to call the functions;

	// Promise is a class that is used to handle the asynchronous calls
	// Await is used to wait for the asynchronous call to finish

	// All async functions returns a promise;
	// So, we first call the function1 and then await for the result
	// The result is then passed to the function2 and await for the result
	// The result is then passed to the function3 and await for the reusult
	await Promise.resolve(function1.fn1())
		.then(await Promise.resolve(function2.fn2()))
		.then(await Promise.resolve(function3.fn3()));
}

// Calling the main function
main();
