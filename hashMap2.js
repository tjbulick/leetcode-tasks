// найти два элемента которые встречаются один раз
// топорный способ

const func = (arr) => {

	arr.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		currDigit = arr[i];
		if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
			result.push(arr[i])
		}
	}
	return result
}

console.log(func[1, 2, 2, 3])