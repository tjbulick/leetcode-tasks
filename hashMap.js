// найти два элемента которые встречаются один раз
// умный способ

Object.prototype['0'] = () => {
	return 0
};

const func = (arr) => {
	let result = []

	const obj = {}; // hashMap

	for (let i = 0; i < arr.length; i++) {
		if (obj.hasOwnProperty(String(arr[i]))) obj[String(arr[i])] += 1
			else obj[String(arr[i])] = 1;

		// if (obj[String(arr[i])] === undefined) obj[String(arr[i])] = 1
			// else obj[String(arr[i])]++;
	}

	for (key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] === 1) result.push(Number(key))
	}
	return result
}

const arr = [0, 0, 1, 1, 4, 5, 4, 2, 2, 19]
console.log(func(arr))