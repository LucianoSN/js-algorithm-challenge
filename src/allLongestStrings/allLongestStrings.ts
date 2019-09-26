/*
 * Option 1 - My First Solution
 */

const longestMy = (input: string[]): string[] => {
	let long = 0; /*?*/

	for (let x of input) {
		if (x.toString().length > long) {
			long = x.toString().length; /*?*/
		}
	}

	return input.filter(x => {
		if (x.toString().length === long) return x;
	});
};

console.log(longestMy(['aba', 'aa', 'ad', 'vcd', 'aba'])); /*?.*/

/*
 * Option 2 - Instructor Solution
 */

const longestInstructor = (inputArray: string[]): string[] => {
	let longestLength = 0;
	const longestWords = []; /*?*/

	inputArray.forEach((word: string) => {
		longestLength =
			longestLength < word.length ? word.length : longestLength; /*?*/
	});

	inputArray.forEach((word: string) => {
		if (word.length === longestLength) {
			longestWords.push(word); /*?*/
		}
	});

	return longestWords;
};

console.log(longestInstructor(['aba', 'aa', 'ad', 'vcd', 'aba'])); /*?.*/

/*
 * Option 3 - Functional Approach
 */

const longestFunctional = (input: string[]): string[] => {
	const longest = input
		.map(w => w.length) /*?*/
		.reduce((x, y) => (x > y ? x : y)); /*?*/

	const words = word => word.length === longest;

	return input.filter(words);
};

console.log(longestFunctional(['aba', 'aa', 'ad', 'vcd', 'aba'])); /*?.*/
