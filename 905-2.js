const sortArrayByParity = (arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			arr.unshift(arr.splice(i, 1)[0]);
		}
	}
	return arr
}

console.log(sortArrayByParity([3,1,2,4]))