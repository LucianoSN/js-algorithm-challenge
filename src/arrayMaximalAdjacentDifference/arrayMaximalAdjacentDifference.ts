/*
 * Option 1 - My First Solution
 */

const arrayMaximalMy = (input: number[]): number => {
	const diff = input
		.map((element, index, array) => Math.abs(element - array[index + 1]))
		.filter(x => !isNaN(x)); /*?*/

	return Math.max(...diff);
};

console.log(arrayMaximalMy([2, 4, 1, 0]));

/*
 * Option 2 - Instructor Solution
 */

const arrayMaximalInstructor = (input: number[]): number => {
	let maxDiff = Math.abs(input[0] - input[1]); /*?*/

	for (let i = 0; i < input.length; i++) {
		let absoluteDiff = Math.abs(input[i - 1] - input[i]); /*?*/
		maxDiff = absoluteDiff > maxDiff ? absoluteDiff : maxDiff;
	}

	return maxDiff;
};

console.log(arrayMaximalInstructor([2, 4, 1, 0]));
