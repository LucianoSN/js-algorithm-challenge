/*
 * Option 1 - My First Solution
 */

const avoidObstaclesMy = (inputArray: number[]): number => {
	let obstacle: number = 0;
	let cycle: number = 1;

	inputArray.sort().forEach((element, index, array) => {
		const check = element + 1;
		const next = array[index + 1];

		if (check < next) {
			obstacle = check / cycle;
			cycle++;
		}
	});

	return obstacle;
};

console.log(avoidObstaclesMy([5, 3, 6, 7, 9]));

/*
 * Option 2 - Instructor Soluction
 */

const avoidObstaclesInstructor = (inputArray: number[]): number => {
	inputArray = inputArray.sort((a, b) => a - b); /*?*/
	const largestArrayVal = inputArray[inputArray.length - 1];

	for (let i = 1; i <= largestArrayVal + 1; i++) {
		if (inputArray.every(element => element % i !== 0)) {
			return i;
		}
	}
};

console.log(avoidObstaclesInstructor([5, 3, 6, 7, 9]));

/*
 * Option 3 - Functional Approach
 */

const avoidObstaclesFunctional = (inputArray: number[]): number => {
	let obstacle = 0;

	inputArray.sort().map((element, index, array) => {
		const i = index + 1;

		if (array.every(x => x % i !== 0)) {
			obstacle = i;
		}
	});

	return obstacle;
};

console.log(avoidObstaclesFunctional([5, 3, 6, 7, 9]));
