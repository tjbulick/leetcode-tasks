// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, k) => {
    
    let numsCopy = [...nums];
    let result = [];
    
	numsCopy = numsCopy.sort(function(a, b) {
		return a - b;
	});

	let li = 0, ri = numsCopy.length - 1;

	while (li != ri) {
		let currSum = numsCopy[li] + numsCopy[ri];
		if (currSum < k) {
			li++;
		} else if (currSum > k) {
			ri--;
		}
		else {
            result[0] = nums.indexOf(numsCopy[li]);
            result[1] = nums.lastIndexOf(numsCopy[ri]);
			return result
		};
	}
}
