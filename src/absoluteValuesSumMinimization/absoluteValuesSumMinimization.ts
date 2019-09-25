/*
 * Option 1
 */

const absoluteValuesSumMinimization1 = (a: number[]): number => {
	const isEven = a.length % 2 === 0; /*?*/
	const half = Math.floor(a.length / 2); /*?*/

	return isEven ? a[half - 1] : a[half];
};

console.log(absoluteValuesSumMinimization1([2, 4, 7]));
console.log(absoluteValuesSumMinimization1([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization1([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization1([2, 4, 7, 6, 6, 8]));

/*
 * Option 2 - Functional Approach
 */

const isEven = (count: number): boolean => count % 2 == 0;
const half = (count: number): number => Math.floor(count / 2);

const absoluteValuesSumMinimization2 = (a: number[]): number =>
	isEven(a.length) ? a[half(a.length) - 1] : a[half(a.length)];

console.log(absoluteValuesSumMinimization2([2, 4, 7]));
console.log(absoluteValuesSumMinimization2([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization2([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization2([2, 4, 7, 6, 6, 8]));
