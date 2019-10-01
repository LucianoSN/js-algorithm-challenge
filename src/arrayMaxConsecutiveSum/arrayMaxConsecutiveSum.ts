/*
 * Option 1 - My First Solution
 */

const arrayMaxMy = (input: number[], k: number): number => {
	// const sums = input
	// 	.map((element, index) => element + input[index + 1])
	// 	.filter(x => {
	// 		if (!isNaN(x)) return x;
	// 	}); /*?*/

	const sums2 = input
		.map((element, index) => {
			let value = 0;

			if (index % k === 0) {
				value = element + input[index + 1]; /*?*/
			} else {
				value = element + input[index * k]; /*?*/
			}

			return value; /*?*/
		})
		.filter(x => {
			if (!isNaN(x)) return x;
		}); /*?*/

	return Math.max(...sums2);
};

console.log(arrayMaxMy([2, 3, 5, 1, 6], 2));
