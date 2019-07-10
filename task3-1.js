// найти пересечение элементов двух массивов и вывести в виде массива
// умный способ через хэш таблицу (точнее через сет)

const twoArrays = (a, b) => {
	let obj = {};
	for (let i = 0; i < a.length; i++) {
		obj[String(a[i])] = true;
	}

	for (key in obj) {
		if (b.indexOf(Number(key)) !== -1) {
			result.push(Number(key))
		}
	}
}