const alphabetic = 'abcdefghijklmnopqrstuvwxyz';

/*
 * Option 1 - My First Solution
 */

const subSequenceMy = (sequence: string): boolean => {
	let isValid = true;

	const index = sequence.split('').map(x => alphabetic.indexOf(x)); /*?*/

	index.forEach((x, i) => {
		if (index[i + 1] <= x) isValid = false;
	});

	return isValid;
};

console.log(subSequenceMy('effg'));
console.log(subSequenceMy('cdce'));
console.log(subSequenceMy('ace'));
console.log(subSequenceMy('bxz'));
