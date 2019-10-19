const binarySearch = (arr, search) => {
	let l = 0, r = arr.length - 1;

	while (l < r) {
		const mid = Math.floor((l + r)/2);
		if (search <= arr[mid]) {
			r = mid;
		} else {
			l = mid + 1;
		}
	}

	return (arr[l] === search) ? l : -1
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const a2 = [0, 1, 2];
console.log(binarySearch(a2, 2))
console.log(binarySearch(arr, 9))
console.log(binarySearch([-1,0,3,5,9,12], 9))
console.log(binarySearch([-1,0,3,5,9,12], 2))