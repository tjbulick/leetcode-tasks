const relativeSortArray = (arr1, arr2) => {
	let leftPart = [];

	// walk through first array by arr2's entries
	for (const elem of arr2) {
		while (arr1.indexOf(elem) !== -1) {
			const index = arr1.indexOf(elem);
			leftPart.push(arr1.splice(index, 1)[0]);
		}
	}

	arr1.sort((a, b) => (a - b));
	
	return leftPart.concat(arr1);
}

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]))