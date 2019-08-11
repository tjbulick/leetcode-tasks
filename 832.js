// https://leetcode.com/problems/flipping-an-image/

/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = (A) => {
	for (let i = 0; i < A.length; i++) {
		A[i].reverse();
		A[i] = A[i].map(elem => (elem ? 0 : 1));
	}

	return A
};