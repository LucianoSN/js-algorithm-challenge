/*
 * Option 1
 */

const sum1 = (param1: number, param2: number): number => {
	return param1 + param2;
};

console.log(sum1(1, 2));
console.log(sum1(3, 2));

const add1 = (...param1: number[]): number => {
	let total = 0;
	param1.forEach(x => (total += x));

	return total;
};

console.log(add1(1, 2, 3, 4, 5));
console.log(add1(2, 3));

/*
 * Option 2 - Functional Approach
 */

const sum2 = (param1: number, param2: number): number => param1 + param2;

console.log(sum2(1, 2));
console.log(sum2(3, 2));

const add2 = (...param1: number[]): number =>
	param1.reduce((total, x) => total + x, 0);

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
