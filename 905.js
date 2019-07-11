const sortArrayByParity = (arr) => {
	let l = 0, r = arr.length - 1;
	while (l < r) {
		if ((arr[l] % 2 === 1) && (arr[r] % 2 === 0)) {
			[arr[l], arr[r]] = [arr[r], arr[l]];
			l++; r--;
		} else if (arr[l] % 2 === 0) {
			l++
		} else {
			r--
		}
	}
	return arr
}

console.log(sortArrayByParity([3,1,2,4]))