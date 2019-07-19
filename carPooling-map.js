// 1094. Car Pooling
// https://leetcode.com/contest/weekly-contest-142/problems/car-pooling/

// решение с мапой оказалось гораздо медленнее, чем с массивом

const carPooling = (trips, capacity) => {
	let timeMap = new Map();

	// пробегаемся по массиву trips, чтобы положить кол-во пассажиров в каждый момент времени
	for (let trip of trips) {
		for (let i = trip[1]; i < trip[2]; i++) {

			if (!timeMap.get(i)) {
				timeMap.set(i, trip[0])
			} else {
				timeMap.set(i, timeMap.get(i) + trip[0])
			}

			// вместо того чтобы пробегаться отдельно по мапе после цикла
			// и проверять кол-во пассажиров, просто сразу проверяем на месте
			// (не надо лишний раз итерироваться по мапе)
			if (timeMap.get(i) > capacity) return false
		}
	}

	return true
}

console.log(carPooling([[2,1,5],[3,3,7]], 4)); // false
console.log(carPooling([[2,1,5],[3,3,7]], 5)); // true
console.log(carPooling([[2,1,5],[3,5,7]], 3)); // true
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11)); // true