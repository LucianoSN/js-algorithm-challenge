/*
 * Option 1 - My First Solution
 */

const arrayMaxMy = (input: number[], k: number): number => {
	let sums: number[] = [];

	for (let i in input) {
		let current = parseInt(i);
		let value = input[current] + input[current + 1]; /*?*/

		if (!isNaN(value)) sums.push(value);
	}

	return Math.max(...sums);
};
// There is an error, the K variable is not used
console.log(arrayMaxMy([2, 3, 5, 1, 6], 2));
