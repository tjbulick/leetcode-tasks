// 1094. Car Pooling
// https://leetcode.com/contest/weekly-contest-142/problems/car-pooling/

const carPooling = (trips, capacity) => {
	let timeMap = new Map();

	// ищем минимальное и максимальное места для посадки и высадки пассажиров
	let minPickUp = trips[0][1];
	let maxDropOff = trips[0][2];
	for (let i = 1; i < trips.length; i++) {
		if (trips[i][1] < minPickUp) minPickUp = trips[i][1];
		if (trips[i][2] > maxDropOff) maxDropOff = trips[i][2];
	}

	// пробегаемся по массиву trips, чтобы положить кол-во пассажиров в каждый момент времени
	for (let trip of trips) {
		for (let i = trip[1]; i < trip[2]; i++) {

			if (!timeMap.get(i)) {
				timeMap.set(i, trip[0])
			} else {
				timeMap.set(i, timeMap.get(i) + trip[0])
			}
		}
	}

	for (let value of timeMap.values()) {
		if (value > capacity) return false
	}

	return true
}

console.log(carPooling([[2,1,5],[3,3,7]], 4));
console.log(carPooling([[2,1,5],[3,3,7]], 5));
console.log(carPooling([[2,1,5],[3,5,7]], 3));
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11));