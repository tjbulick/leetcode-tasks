// 350. Intersection of Two Arrays II
// https://leetcode.com/problems/intersection-of-two-arrays-ii/

const intersect = (a, b) => {
	let map1 = new Map();
	let map2 = new Map();

	// конвертим входные массивы в мапы
	a.forEach((elem) => {
		if (map1.get(elem) === undefined) map1.set(elem, 1)
		else map1.set(elem, map1.get(elem) + 1)
	})

	b.forEach((elem) => {
		if (map2.get(elem) === undefined) map2.set(elem, 1)
		else map2.set(elem, map2.get(elem) + 1)
	})

	// оптимизация: выбираем из двух мап ту, которая меньше
	// эта оптимизация практически не влияет на производительность
	if (map2.size < map1.size) {
		let tmp = map1;
		map1 = map2;
		map2 = tmp;
	}

	// делаем пересечение
	for (key of map1.keys()) {
		if (map2.has(key)) {
			if (map2.get(key) < map1.get(key)) map1.set(key, map2.get(key))
		} else {
			map1.delete(key)
		}
	}

	// конвертим обратно в массив, тк надо вернуть массив
	let result = []
	for ([number, count] of map1.entries()) {
		for (let i = 0; i < count; i++) result.push(number)
	}

	return result
}

console.log(intersect([4,9,5], [9,4,9,8,4]));