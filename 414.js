const thirdMax = (arr) => {
	let max1 = arr[0];
	let max2, max3;
	let set = new Set(arr);
	arr = [...set];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] > max1) {
			max3 = max2;
			max2 = max1;
			max1 = arr[i];
			continue;
		}

		if (max2 === undefined) {
			max2 = arr[i];
			continue;
		}

		if (arr[i] > max2) {
			max3 = max2;
			max2 = arr[i];
			continue;
		}

		if (max3 === undefined && max2 !== undefined) {
			max3 = arr[i];
			continue;
		}

		if (arr[i] > max3) {
			max3 = arr[i];
		}
	}

	return max3 !== undefined ? max3 : max1
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1,2,2,5,3,5])) // 2
console.log(thirdMax([3,3,4,3,4,3,0,3,3])) // 0