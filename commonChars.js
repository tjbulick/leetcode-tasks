const commonChars = (a) => {
	let result = '';
	let alphabet = new Map([
		['a', 0],
		['b', 0],
		['c', 0],
		['d', 0],
		['e', 0],
		['f', 0],
		['g', 0],
		['h', 0],
		['i', 0],
		['j', 0],
		['k', 0],
		['l', 0],
		['m', 0],
		['n', 0],
		['o', 0],
		['p', 0],
		['q', 0],
		['r', 0],
		['s', 0],
		['t', 0],
		['u', 0],
		['v', 0],
		['w', 0],
		['x', 0],
		['y', 0],
		['z', 0]
		]);

	for (let letter of alphabet.keys()) {
		let min = a[0].split(letter).length - 1; // ищем миниальное, инициализируем первым

		for (let i = 1; i < a.length; i++) {
			let matches = a[i].split(letter).length - 1;
			if (matches < min) min = matches;
		}

		alphabet.set(letter, min);
	}

	// преобразовать мапу в массив
	for (let [letter, count] of alphabet) {
		result += letter.repeat(count)
	}
	return result.split('')
}

console.log(commonChars(["bella","label","roller"]))
console.log(commonChars(["cool","lock","cook"]))