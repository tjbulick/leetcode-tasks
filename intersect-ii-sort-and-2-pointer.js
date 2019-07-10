// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (a, b) => {
	let p1 = 0; // pointer 1
	let p2 = 0; // pointer 2
	let result = [];

	a.sort((e1, e2) => e1 - e2);
	b.sort((e1, e2) => e1 - e2);

	while (p1 < a.length && p2 < b.length) {
		if (a[p1] === b[p2]) {
			result.push(a[p1]);
			p1++;
			p2++;
		} else if (a[p1] > b[p2]) {
			p2++
		} else {
			p1++
		}
	}

	return result
}

console.log(intersect([4,9,5], [9,4,9,8,4]));