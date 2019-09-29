/*
 * Option 1 - My First Solution
 */

const areEquallyStrongMy = (
	yourLeft: number,
	yourRight: number,
	friendsLeft: number,
	friendsRight: number
): boolean => {
	const your = yourLeft + yourRight;
	const friend = friendsLeft + friendsRight;

	return your === friend;
};

console.log(areEquallyStrongMy(10, 15, 15, 10));
console.log(areEquallyStrongMy(15, 10, 15, 10));
console.log(areEquallyStrongMy(15, 10, 15, 9));

/*
 * Option 2 - Instructor Approach
 */

const areEquallyStrongInstructor = (
	yourLeft: number,
	yourRight: number,
	friendsLeft: number,
	friendsRight: number
): boolean => {
	const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
	const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
	const friendWeakest =
		friendsLeft <= friendsRight ? friendsLeft : friendsRight;
	const friendStrongest =
		friendsLeft >= friendsRight ? friendsLeft : friendsRight;

	return yourStrongest === friendStrongest && yourWeakest === friendWeakest;
};

console.log(areEquallyStrongInstructor(10, 15, 15, 10));
console.log(areEquallyStrongInstructor(15, 10, 15, 10));
console.log(areEquallyStrongInstructor(15, 10, 15, 9));

/*
 * Option 3 - Functional Approach
 */

const areEquallyStrongFunctional = (
	yourLeft: number,
	yourRight: number,
	friendsLeft: number,
	friendsRight: number
): boolean => {
	const container = [yourLeft, yourRight, friendsLeft, friendsRight]; /*?*/
	const total = container.reduce((total, x) => total + x); /*?*/

	return total % 2 === 0;
};

console.log(areEquallyStrongFunctional(10, 15, 15, 10));
console.log(areEquallyStrongFunctional(15, 10, 15, 10));
console.log(areEquallyStrongFunctional(15, 10, 15, 9));
