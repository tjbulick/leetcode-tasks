// positions: 
// number of ways:
// 1 1 2 3 5 8
// 0 1 2 3 4 5

const climbStairs = (n) => {
	let arr = [1, 1];
	if (n < 2) {
		return arr[n] // or just return 1
	}

	// loop through fibonacci array
	for (let i = 2; i < n + 1; i++) {
		// calculate the next element
		arr[i] = arr[i - 1] + arr[i - 2]
	}

	return arr[n]
}