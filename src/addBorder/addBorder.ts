/*
 * Option 1
 */

const addBorderMy = (picture: string[]): string[] => {
	let border = '*****';

	let canvas = picture.map(x => `*${x}*`);
	canvas.unshift(border);
	canvas.push(border);

	return canvas;
};

console.log(addBorderMy(['abc', 'ded'])); /*?.*/

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
