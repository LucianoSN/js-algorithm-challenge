/*
 * Option 1 - My First Solution
 */

const arrayChangeMy = (inputArray: number[]): number => {
	let count = 0;

	for (let i in inputArray) {
		if (inputArray[0] !== inputArray[i]) break;
		count++;
	}

	return count;
};

console.log(arrayChangeMy([1, 1, 1]));

/*
 * Option 2 - Instruction Solution
 */

const arrayChangeInstructor = (inputArray: number[]): number => {
	let count = 0;

	for (let i = 0; i < inputArray.length; i++) {
		let current = inputArray[i]; /*?*/
		let next = inputArray[i + 1]; /*?*/

		if (current >= next) {
			const difference = current + 1 - next; /*?*/
			inputArray[i + 1] = current + 1; /*?*/

			console.log(count, difference);

			count += difference;
		}
	}

	return count;
};

console.log(arrayChangeInstructor([1, 1, 1]));

/*
 * Option 3 - Functional Approach
 */

const arrayChangeFunctional = (inputArray: number[]): number => {
	let count = 1;

	inputArray.slice(1).forEach((element, index) => {
		if (element === inputArray[index + 1]) count += element;
	});

	return count;
};

console.log(arrayChangeFunctional([1, 1, 1]));
