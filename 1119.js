const removeVowels = (str) => {
	let result = '';
	let vowels = 'aeiou';
	for (let i = 0; i < str.length; i++) {
		if (!vowels.includes(str[i])) result += str[i]
	}
	return result
}

console.log(removeVowels('leetcodeisacommunityforcoders'));
console.log(removeVowels('aeiou'));