/*
 * Option 1 - My First Solution
 */

const addTwoMy = (num: number): number => {
	let digits = num.toString().split(''); /*?*/
	return digits.reduce((total, x) => total + parseInt(x), 0);
};

console.log(addTwoMy(29));

/*
 * Option 2 - Instructor Solution
 */

const addTwoInstructor = (num: number): number => {
	const nums = num.toString().split(''); /*?*/
	return parseInt(nums[0]) + parseInt(nums[1]);
};

console.log(addTwoInstructor(29));

/*
 * Option 3 - Functional Approach
 */

const addTwoFunctional = (num: number): number =>
	num
		.toString()
		.split('')
		.reduce((total, x) => total + parseInt(x), 0);

console.log(addTwoFunctional(29));
