/*
 * Option 1 - My First Solution
 */

const adjacentMy = (input: number[]): number => {
	let largest = input.slice(0, 2).reduce((total, x) => total * x, 1); /*?*/
	let inputArray = input.slice(1); /*?*/

	for (let x in inputArray) {
		const value = inputArray[x] * inputArray[parseInt(x) + 1]; /*?*/

		if (!isNaN(value) && value > largest) {
			largest = value;
		}
	}

	return largest;
};

console.log(adjacentMy([3, 6, -2, -5, 7, 3])); /*?.*/

/*
 * Option 2 - Instructor Solution
 */

const adjacentElementsProduct = (inputArray: number[]): number => {
	let largestProduct = inputArray[0] * inputArray[1]; /*?*/

	for (let i = 1; i < inputArray.length - 1; i++) {
		const product = inputArray[i] * inputArray[i + 1]; /*?*/
		largestProduct = largestProduct < product ? product : largestProduct;
	}

	return largestProduct;
};

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); /*?.*/

/*
 * Option 3 - Functional Approach
 */

const adjacentFunctional = (inputArray: number[]): number => {
	return inputArray
		.map((value, i) => value * inputArray[i + 1]) /*?*/
		.map(value => (!isNaN(value) ? value : 0)) /*?*/
		.reduce((x, y) => (x > y ? x : y)); /*?*/
};

console.log(adjacentFunctional([3, 6, -2, -5, 7, 3])); /*?.*/
