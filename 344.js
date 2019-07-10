// https://leetcode.com/problems/reverse-string/
// 344. Reverse String
// входные данные в виде массива

const reverseString = (arr) => {
	let tmp;
	for (let i = 0; i < Math.ceil((arr.length - 1) / 2); i++) {
		tmp = arr[i];
		arr[i] = arr[arr.length - 1 - i];
		arr[arr.length - 1 - i] = tmp;
	}

	return arr
}

console.log(reverseString(["h","e","l","l","o"]))
console.log(reverseString(["H","a","n","n","a","h"]))