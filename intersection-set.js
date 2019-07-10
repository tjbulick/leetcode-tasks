// 349. Intersection of Two Arrays
// https://leetcode.com/problems/intersection-of-two-arrays/

const intersection = (a, b) => {
	let set1 = new Set(a);
	let set2 = new Set(b);

	let result = [...set1].filter(x => set2.has(x))
	return result
}

console.log(intersection([4,9,5], [9,4,9,8,4]))