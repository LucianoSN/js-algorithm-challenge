/*
 * Option 1 - My First Solution
 */

const arrayConversionMy = (inputArray: number[]): number => {
	const sum = inputArray
		.map((element, index) => {
			if (index % 2 === 0) return element + inputArray[index + 1];
		})
		.filter(x => x !== undefined); /*?*/

	const multiply = sum
		.map((element, index) => {
			if (index % 2 === 0) return element * sum[index + 1];
		})
		.filter(x => x !== undefined); /*?*/

	return multiply.reduce((total, x) => total + x);
};

console.log(arrayConversionMy([1, 2, 3, 4, 5, 6, 7, 8]));

/*
 * Option 2 - Instructor Solution
 */

const arrayConversionInstructor = (inputArray: number[]): number => {
	const sumProduct = (nums: number[], isOdd: boolean): number[] => {
		const sumProducts: number[] = [];

		if (isOdd) {
			for (let i = 0; i < nums.length; i += 2) {
				sumProducts.push(nums[i] + nums[i + 1]);
			}
		} else {
			for (let i = 0; i < nums.length; i += 2) {
				sumProducts.push(nums[i] * nums[i + 1]);
			}
		}

		return sumProducts;
	};

	let isOdd = true;

	while (inputArray.length !== 1) {
		inputArray = sumProduct(inputArray, isOdd);
		isOdd = !isOdd;
	}

	return inputArray[0];
};

console.log(arrayConversionInstructor([1, 2, 3, 4, 5, 6, 7, 8]));

/*
 * Option 3 - Functional Approach
 */

const arrayConversionFunctional = (inputArray: number[]): number => {
	const sum = (num1: number, num2: number) => num1 + num2;
	const multiply = (num1: number, num2: number) => num1 * num2;

	const conversion = (nums: number[], operation: any): number[] => {
		return nums
			.map((element, index) => {
				if (index % 2 === 0) {
					return operation(element, nums[index + 1]);
				}
			})
			.filter(values => {
				if (values !== undefined) return values;
			});
	};

	const output1 = conversion(inputArray, sum); /*?*/
	const output2 = conversion(output1, multiply); /*?*/

	return conversion(output2, sum)[0];
};

console.log(arrayConversionFunctional([1, 2, 3, 4, 5, 6, 7, 8]));
