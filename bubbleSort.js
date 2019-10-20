// самая простая реализация, без каких-либо оптимизаций

const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] //es6 feature, swap elements
			}
		}
	}

	return arr
}

let arr = [3, 1, 6, 5, 9, 3, 6];
console.log(bubbleSort(arr));