// 394. Decode String
// https://leetcode.com/problems/decode-string/

const decodeString = (str) => {
	let result = '';
	let i = 0;

	// напишем метод для получения индекса правой скобки по индексу левой
	let getRightBracket = (str, leftBracket) => {
		let numberOfLeft = 1, numberOfRight = 0, i = leftBracket + 1;

		while (numberOfLeft !== numberOfRight) {
			if (str[i] === '[') { numberOfLeft++ }
			if (str[i] === ']') { numberOfRight++ }
			i++
		}
		return i - 1
	}

	// напишем метод splice для строк так как надо удалять и вставлять
	let spliceString = (str, start, deleteCount, add) => {
		let arr = str.split('');
		arr.splice(start, deleteCount, add)
		return arr.join('')
	}

	while (i < str.length && str.indexOf('[') !== -1) {
		if (isNaN(Number(str[i]))) {
			i++
		} else {
			let exp, k; // expression, сколько раз для повторять
			let leftBracket = str.indexOf('[', i);
			k = Number(str.substring(i, leftBracket))
			let rightBracket = getRightBracket(str, leftBracket);
			exp = str.substring(leftBracket + 1, rightBracket);
			exp = exp.repeat(k) // размножаем exp сколько надо раз
			str = spliceString(str, i, rightBracket - i + 1, exp);
		}
	}

	return str
}

console.log(decodeString('3[a]2[bc]')) //должно быть "aaabcbc"