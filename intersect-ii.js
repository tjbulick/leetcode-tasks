// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (a, b) => {
	if (a.length === 0 || b.length === 0) return [];

	let i = 0;
	while (i < a.length) {

		if (b.includes(a[i])) {
			b.splice(b.indexOf(a[i]), 1)
		} else {
			a.splice(i, 1);
			i--
		}
		i++
	}

	return a
}

console.log(intersect([1,1,1,1,2,2,1], [2, 2]));