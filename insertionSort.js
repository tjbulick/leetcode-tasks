const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		while (j >= 0 && arr[j]> arr[j + 1]) {
			[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			j--
		}
	}

	return arr
}

let arr = [322, 1337, 69, 505, 911, 37, 666];
console.log(insertionSort(arr));