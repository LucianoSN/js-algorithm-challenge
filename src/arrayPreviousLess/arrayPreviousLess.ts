/*
 * Option 1 - My First Solution
 */

const arrayPreviousLessMy = (items: number[]): number[] => {
	const undef = value => (value === undefined ? -1 : value);

	return items.map((element, index, array) => {
		const previous = undef(array[index - 1]);
		return previous < element ? previous : -1;
	});
};

console.log(arrayPreviousLessMy([3, 5, 2, 4, 5]));

/*
 * Option 2 - Instructor Solution
 */

const arrayPreviousLessInstructor = (items: number[]): number[] => {
	const lessThanList: number[] = [];

	for (let i = items.length - 1; i >= 0; i--) {
		for (let j = i; j >= 0; j--) {
			if (items[i] > items[j]) {
				lessThanList.unshift(items[j]);
				break;
			} else if (j === 0) {
				lessThanList.unshift(-1);
			}
		}
	}

	return lessThanList;
};

console.log(arrayPreviousLessInstructor([3, 5, 2, 4, 5]));
