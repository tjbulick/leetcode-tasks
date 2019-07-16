const heightChecker = (heights) => {
	let sortedHeights = [...heights];
	sortedHeights.sort((a, b) => a - b);

	let counter = 0;
	for (let i = 0; i < heights.length; i++) {
		if (heights[i] !== sortedHeights[i]) counter++;
	}

	return counter
}

console.log(heightChecker([1,1,4,2,1,3]));