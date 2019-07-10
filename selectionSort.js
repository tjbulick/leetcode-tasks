const selectionSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]]
			}
		}
	}

	return arr
}

let arr = [3, 1, 6, 5, 9, 3, 6];
console.log(selectionSort(arr));