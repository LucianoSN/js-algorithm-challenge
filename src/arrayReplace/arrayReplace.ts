/*
 * Option 1 - My First Solution
 */

const arrayReplaceMy = (
	inputArray: number[],
	elemToReplace: number,
	substitutionElem: number
): number[] => {
	let list: number[] = [];

	for (let x of inputArray) {
		if (x === elemToReplace) {
			list.push(substitutionElem);
		} else {
			list.push(x);
		}
	}

	return list;
};

console.log(arrayReplaceMy([1, 2, 1], 1, 3));

/*
 * Option 2 - Instructor Solution
 */

const arrayReplaceInstructor = (
	inputArray: number[],
	elemToReplace: number,
	substitutionElem: number
): number[] => {
	inputArray.forEach((element, index) => {
		if (element === elemToReplace) {
			inputArray[index] = substitutionElem;
		}
	});
	return inputArray;
};

console.log(arrayReplaceInstructor([1, 2, 1], 1, 3));

/*
 * Option 3 - Functional approach
 */

const arrayReplaceFunctional = (
	inputArray: number[],
	elemToReplace: number,
	substitutionElem: number
): number[] => {
	inputArray.forEach((element, index) => {
		if (element === elemToReplace)
			inputArray.splice(index, 1, substitutionElem);
	});

	return inputArray;
};

console.log(arrayReplaceFunctional([1, 2, 1], 1, 3));
