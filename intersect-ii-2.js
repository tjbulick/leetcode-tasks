// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (a, b) => {
	let result = [];

	for (item of a) {

		if (b.includes(item)) {
			result.push(item);
			b.splice(b.indexOf(item), 1);
		}
	}
	return result
}

console.log(intersect([4,9,5,4,4,4,4,4,4], [9,4,9,8,4]));
console.log(intersect([1,1,1,1,2,2,1], [2, 2]));