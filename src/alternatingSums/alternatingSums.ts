/*
 * Option 1 - My First Solution
 */

const alternatingSumsMy = (a: number[]): number[] => {
	const team1: number[] = [];
	const team2: number[] = [];

	a.forEach((x, i) => {
		i % 2 === 0 ? team1.push(x) : team2.push(x);
	});

	return [team1.reduce((x, y) => x + y, 0), team2.reduce((x, y) => x + y, 0)];
};

console.log(alternatingSumsMy([50, 60, 60, 45, 70]));

/*
 * Option 2 - Instructor Solution
 */

const alternatingSumsInstructor = (a: number[]): number[] => {
	let evenSum = 0;
	let oddSum = 0;

	a.forEach((element, index) => {
		if (index % 2 === 0) {
			evenSum += element;
		} else {
			oddSum += element;
		}
	});

	return [evenSum, oddSum];
};

console.log(alternatingSumsInstructor([50, 60, 60, 45, 70]));

/*
 * Option 3 - Functional Approach
 */

const alternatingSumsFunctional = (a: number[]): number[] => {
	let evenSum = 0;
	let oddSum = 0;

	a.forEach((x, i) => (i % 2 === 0 ? (evenSum += x) : (oddSum += x)));

	return [evenSum, oddSum];
};

console.log(alternatingSumsFunctional([50, 60, 60, 45, 70]));
