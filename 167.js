// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 167. Two Sum II - Input array is sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, k) {
    
    let result = [];

	let li = 0, ri = nums.length - 1;

	while (li != ri) {
		let currSum = nums[li] + nums[ri];
		if (currSum < k) {
			li++;
		} else if (currSum > k) {
			ri--;
		}
		else {
            result.push(li + 1);
            result.push(ri + 1);
			return result
		};
	}
};