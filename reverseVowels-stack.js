// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/
// то же самое, только стеком вместо reverse()

const reverseVowels = (str) => {
	let vowels = ['a', 'A', 'o', 'O', 'u', 'U', 'e', 'E', 'i', 'I'];
	let vowelsStack = [];

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) { vowelsStack.push(str[i]) }
	}

	str = str.split('')
	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			str[i] = vowelsStack.pop()
		}
	}

	str = str.join('')

	return str
}

console.log(reverseVowels('abcdefg'))