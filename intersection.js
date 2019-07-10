const intersection = (a, b) => {
	let result = []
	// оптимизация: выбираем меньший массив из двух
	if (b.length < a.length) {
		let tmp = a;
		a = b;
		b = tmp;
	}

	for (item of a) {
		if (b.includes(item) && !result.includes(item)) result.push(item)
	}

return result
}

console.log(intersection([4,9,5], [9,4,9,8,4]))