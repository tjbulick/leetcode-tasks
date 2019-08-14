// 345. Reverse Vowels of a String
// https://leetcode.com/problems/reverse-vowels-of-a-string/

const reverseVowels = (str) => {
	let vowels = ['a', 'A', 'o', 'O', 'u', 'U', 'e', 'E', 'i', 'I'];
	let vowelsIndexes = []; // тут храним индексы гласных в оригинальной строке
	let vowelsList = []; // а тут сами гласные в массиве

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			vowelsIndexes.push(i);
			vowelsList.push(str[i])
		}
	}

	vowelsList.reverse();

	str = str.split('')
	for (let i = 0; i < vowelsIndexes.length; i++) {
		str[vowelsIndexes[i]] = vowelsList[i]
	}

	str = str.join('')

	return str
}

console.log(reverseVowels('abcde'))