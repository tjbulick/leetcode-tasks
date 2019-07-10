// бинарный поиск, двоичный

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (arr, target) => {
	let lIndex = 0, rIndex = arr.length - 1, midIndex;
	let result;

	while (lIndex !== rIndex) {
		midIndex = (rIndex + lIndex) / 2;

		if ((rIndex - lIndex + 1) % 2 === 0) {
			//если кол-во элементов в подмассиве четное
			midIndex = Math.ceil(midIndex);
		}

		if (arr[midIndex] > target) {
			rIndex = midIndex - 1;
		} else if (arr[midIndex] < target) {
			lIndex = midIndex + 1;
		} else {
			lIndex = midIndex;
			rIndex = midIndex;
		}
	}

	result = lIndex; //или правому, неважно
	return (arr[result] !== target) ? -1 : result // вернуть -1 если не нашли
	// return result
};

console.log(binarySearch(arr, 9))