const alphabetic = 'abcdefghijklmnopqrstuvwxyz';

/*
 * Option 1 - My First Solution
 */

const alphabeticMy = (input: string): string => {
	let words = []; /*?*/

	input.split('').forEach(x => {
		let char = alphabetic[alphabetic.indexOf(x) + 1]; /*?*/
		words.push(char === undefined ? alphabetic[0] : char);
	});

	return words.join('');
};

console.log(alphabeticMy('crazy')); /*?.*/

/*
 * Option 2 - Instructor Solution
 */

const alphabeticInstructor = (inputString: string): string => {
	const alphabet = alphabetic.split(''); /*?*/
	let inputShifted = inputString.split(''); /*?*/

	for (let i = 0; i < inputShifted.length; i++) {
		let index = 0;

		if (inputShifted[i] !== 'z') {
			index = alphabet.indexOf(inputShifted[i]) + 1; /*?*/
		}

		inputShifted[i] = alphabet[index];
	}

	return inputShifted.join('');
};

console.log(alphabeticInstructor('crazy')); /*?.*/

/*
 * Option 3 - Functional Approach
 */

const alphabeticFunctional = (input: string): string => {
	return input
		.split('') /*?*/
		.map(x => alphabetic.indexOf(x) + 1) /*?*/
		.map(x => alphabetic[x]) /*?*/
		.map(x => (x === undefined ? alphabetic[0] : x)) /*?*/
		.join('');
};

console.log(alphabeticFunctional('crazy')); /*?.*/
