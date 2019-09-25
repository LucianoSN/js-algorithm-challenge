/*
 * Option 1 - My First Solution
 */

const addBorderMy = (picture: string[]): string[] => {
	let wall = '*'.repeat(picture[0].length + 2); /*?*/

	let canvas = picture.map(x => `*${x}*`);
	canvas.unshift(wall);
	canvas.push(wall);

	return canvas;
};

console.log(addBorderMy(['abc', 'ded'])); /*?.*/

/*
 * Option 2 - Instructor Solution
 */

const addBorderInstructor = (picture: string[]): any => {
	let wall = '*'.repeat(picture[0].length + 2); /*?*/

	picture.unshift(wall);
	picture.push(wall);

	for (let i = 1; i < picture.length - 1; i++) {
		picture[i] = '*'.concat(picture[i], '*'); /*?*/
	}

	return picture;
};

console.log(addBorderInstructor(['abc', 'ded'])); /*?.*/

/*
 * Option 2 - Functional Approach
 */

const wall = (chars: string[]): string => '*'.repeat(chars[0].length + 2);

const addBorderFunctional = (picture: string[]): string[] => {
	let canvas = picture.map(x => `*${x}*`); /*?*/
	canvas.unshift(wall(picture));
	canvas.push(wall(picture));

	return canvas;
};

console.log(addBorderFunctional(['abc', 'ded'])); /*?.*/
