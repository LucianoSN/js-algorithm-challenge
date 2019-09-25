const absoluteValuesSumMinimization = (a: number[]): number  =>{
	const isEven = a.length % 2 === 0; /*?*/
	const half = Math.floor(a.length / 2); /*?*/
	return isEven ? a[half - 1] : a[half];
};

console.log(absoluteValuesSumMinimization([2, 4, 7]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
