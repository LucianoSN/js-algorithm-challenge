/*
 * Option 1 - My First Solution
 */

const adjacentMy = (input: number[]): number => {
	let num = input.slice(input.length - 2); /*?*/
	return num.reduce((total, x) => total * x, 1);
};

console.log(adjacentMy([3, 6, -2, -5, 7, 3]));
