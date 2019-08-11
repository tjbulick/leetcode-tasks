// https://leetcode.com/problems/move-zeroes/

const moveZeroes = (a) => {
	let length = a.length;

	for (let i = 0; i < length - 1; i++) { // проходимся до length - 1, потому что неважно какой элемент будет последним
		if (a[i] === 0) {
			a.splice(i, 1);
			i--; length--;
			a.push(0);
			console.log(a)
		}
	}
	return a
}

console.log(moveZeroes([0,1,0,3,12]))