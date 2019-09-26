/*
 * Option 1 - My First Solution
 */

const almostIncreasingMy = (sequence: number[]): boolean => {
	let increase = true;

	sequence.slice(1).forEach(element => {
		if (element <= sequence[0]) increase = false;
	});

	return increase;
};

console.log(almostIncreasingMy([1, 3, 2, 1])); /*?.*/
console.log(almostIncreasingMy([1, 3, 2])); /*?.*/
console.log(almostIncreasingMy([1, 2])); /*?.*/
console.log(almostIncreasingMy([1, 3])); /*?.*/

console.log(almostIncreasingMy([1, 3, 2, 4, 5, 2, 4])); /*?.*/

/*
 * Option 2 - Instructor Solution
 */

const almostIncreasingInstructor = (sequence: number[]): boolean => {
	let count = 0;

	for (let i = 0; i < sequence.length; i++) {
		if (sequence[i] <= sequence[i - 1]) {
			count++;
			if (
				sequence[i] <= sequence[i - 2] &&
				sequence[i + 1] <= sequence[i - 1]
			) {
				return false;
			}
		}
	}

	return count <= 1; /*?.*/
};

console.log(almostIncreasingInstructor([1, 3, 2, 1])); /*?.*/
console.log(almostIncreasingInstructor([1, 3, 2])); /*?.*/
console.log(almostIncreasingInstructor([1, 2])); /*?.*/
console.log(almostIncreasingInstructor([1, 3])); /*?.*/

// The instructor code has a bug, the result above must be "True", but the result is "False"
console.log(almostIncreasingInstructor([1, 3, 2, 4, 5, 2, 4])); /*?.*/

/*
 * Option 3 - Functional Approach
 */

const almostFunctional = (sequence: number[]): boolean => {
	let increase = true;

	let canBe = value => value > sequence[0];
	let bits = sequence.map(x => canBe(x)).slice(1); /*?*/

	bits.forEach(x => {
		if (!x) {
			increase = x;
			return;
		}
	});

	return increase;
};

console.log(almostFunctional([1, 3, 2, 1])); /*?.*/
console.log(almostFunctional([1, 3, 2])); /*?.*/
console.log(almostFunctional([1, 2])); /*?.*/
console.log(almostFunctional([1, 3])); /*?.*/

console.log(almostFunctional([1, 3, 2, 4, 5, 1, 4])); /*?.*/
