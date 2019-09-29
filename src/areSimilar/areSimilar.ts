/*
 * Option 1 - My First Solution
 */

const areSimilarMy = (a: number[], b: number[]): boolean => {
	let equal: boolean = true;

	const aSorted: number[] = a.sort(); /*?*/
	const bSorted: number[] = b.sort(); /*?*/

	aSorted.forEach((element, index) => {
		if (element !== bSorted[index]) equal = false;
	});

	return equal;
};

console.log(areSimilarMy([1, 2, 3], [1, 2, 3]));
console.log(areSimilarMy([1, 2, 3], [2, 1, 3]));
console.log(areSimilarMy([1, 2, 2], [2, 1, 1]));

/*
 * Option 2 - Instructor Approach
 */

const areSimilarInstructor = (a: number[], b: number[]): boolean => {
	const c: number[] = [];
	let d: number[] = [];

	if (a.toString() === b.toLocaleString()) {
		return true;
	}

	for (let i in a) {
		if (a[i] !== b[i]) {
			c.push(a[i]);
			d.push(b[i]);
		}
	}

	d = d.reverse(); /*?*/

	return c.length === 2 && c.toString() === d.toString();
};

console.log(areSimilarInstructor([1, 2, 3], [1, 2, 3]));
console.log(areSimilarInstructor([1, 2, 3], [2, 1, 3]));
console.log(areSimilarInstructor([1, 2, 2], [2, 1, 1]));

/*
 * Option 3 - Functional Approach
 */

const areSimilarFunctional = (a: number[], b: number[]): boolean => {
	const isValid = ([x, y]) => {
		let equal = true;
		const ySorted = y.sort();

		x.sort().forEach((element, index) => {
			if (element !== ySorted[index]) equal = false;
		});

		return equal;
	};

	return isValid([a, b]);
};

console.log(areSimilarFunctional([1, 2, 3], [1, 2, 3]));
console.log(areSimilarFunctional([1, 2, 3], [2, 1, 3]));
console.log(areSimilarFunctional([1, 2, 2], [2, 1, 1]));
