// найти пересечение элементов двух массивов и вывести в виде массива
// топорный способ, был придуман с филиппом и доработан позже
// это не очень хорошее решение, потому что есть лучшее в другом файле
// решение оказалось очень медленным, лучше вообще нигде его не использовать...

const twoArrays = (a, b) => {
	a.sort((a, b) => a - b);
	b.sort((a, b) => a - b);

	let currDigit = a[0];

	for (let i = 1; i < a.length; i++) {
		if (a[i] === currDigit) {
			a.splice(i, 1);
			i--;
		}
			else {
				currDigit = a[i]
			}
	}

	currDigit = b[0];

	for (let i = 1; i < b.length; i++) {
		if (b[i] === currDigit) {
			b.splice(i, 1);
			i--;
		}
			else {
				currDigit = b[i]
			}
	}

	let result = [];

	a.forEach((elem) => {
		if (b.includes(elem)) result.push(elem)
	})

	return result
}

console.log(twoArrays([4,9,5,4,4,4,4], [9,4,9,8,4]))