const alphabetic = 'abcdefghijklmnopqrstuvwxyz';

/*
 * Option 1 - My First Solution
 */

const subSequenceMy = (sequence: string): boolean => {
	let isValid = true;

	const index = sequence.split('').map(x => alphabetic.indexOf(x)); /*?*/

	index.forEach((x, i) => {
		if (x >= index[i + 1]) isValid = false;
	});

	return isValid;
};

console.log(subSequenceMy('effg'));
console.log(subSequenceMy('cdce'));
console.log(subSequenceMy('ace'));
console.log(subSequenceMy('bxz'));

/*
 * Option 2 - Instructor Approach
 */

const subSequenceInstructor = (s: string): boolean => {
	const chars: string[] = s.split(''); /*?*/
	const charValues: number[] = [];

	chars.forEach((char: string) => {
		charValues.push(char.charCodeAt(0));
	});

	if (new Set(charValues).size !== charValues.length) {
		return false;
	}

	for (let i = 0; i < charValues.length - 1; i++){
		if (charValues[i] >= charValues[i + 1]){
			return false;
		}
	}

	return true;
};

console.log(subSequenceInstructor('effg'));
console.log(subSequenceInstructor('cdce'));
console.log(subSequenceInstructor('ace'));
console.log(subSequenceInstructor('bxz'));
