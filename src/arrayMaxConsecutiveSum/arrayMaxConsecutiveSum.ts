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

/*
 * Option 2 - Instructor Solution
 */

const arrayMaxInstructor = (input: number[], k: number): number => {
	let sum = 0;

	for (let i = 0; i < k; i++) {
		sum += input[i]; /*?*/
	}

	let max = sum; /*?*/

	for (let i = k; i < input.length; i++) {
		sum -= input[i - k]; /*?*/
		sum += input[i]; /*?*/

		console.log(sum, max);

		if (sum > max) {
			max = sum; /*?*/
		}
	}

	return max;
};

console.log(arrayMaxInstructor([2, 3, 5, 1, 6], 2));

/*
 * Option 3 - Functional Approach
 */

const arrayMaxFunctional = (input: number[], k: number): number => {
	const lessThenK = (index: number) => index < k;
	const notUndefined = (value) => value !== undefined;

	let sum = input.filter((value, index) => lessThenK(index)).reduce((total, x) => total + x); /*?*/
	let max = sum;

	input.forEach((value, index, array) => {
		const x = array[index - k];

		if (notUndefined(x)) {
			sum -= x; /*?*/
			sum += array[index]; /*?*/

			console.log(sum, max);
		}

		if (sum > max) {
			max = sum;
		}

	});


	return max
};

console.log(arrayMaxFunctional([2, 3, 5, 1, 6], 2));
