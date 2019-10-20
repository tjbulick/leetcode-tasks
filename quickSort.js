const quickSort = (arr) => {
	if (arr.length < 2) {
		return arr;
	}
	const pivotPosition = Math.floor(Math.random() * arr.length);
	const pivot = arr[pivotPosition];

	const less = arr.filter(value => value < pivot);
	const greater = arr.filter((value, index) => {
		const isPivot = index === pivotPosition;
		return !isPivot && (value >= pivot);
	});

	return [...quickSort(less), pivot, ...quickSort(greater)];
}

const arr = [1, 213, 3, 5, 2, 8, 7];
console.log(quickSort(arr));