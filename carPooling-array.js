// 1094. Car Pooling
// https://leetcode.com/contest/weekly-contest-142/problems/car-pooling/

const carPooling = (trips, capacity) => {
	let timeMap = [];

	for (let trip of trips) {
		for (let i = trip[1]; i < trip[2]; i++) {
			(timeMap[i]) ? timeMap[i] += trip[0] : timeMap[i] = trip[0];
			// тут сразу чекаем кол-во пассажиров
			// сначала сделал отдельным циклом, чуть ниже даже оставил его закомментированным
			if (timeMap[i] > capacity) return false
		}
	}

	/*
	for (let i = 0; i < timeMap.length; i++) {
		if (!(i in timeMap)) continue;
		if (timeMap[i] > capacity) return false
	}
	*/

	return true
}

console.log(carPooling([[2,1,5],[3,3,7]], 4)); // false
console.log(carPooling([[2,1,5],[3,3,7]], 5)); // true
console.log(carPooling([[2,1,5],[3,5,7]], 3)); // true
console.log(carPooling([[3,2,7],[3,7,9],[8,3,9]], 11)); // true