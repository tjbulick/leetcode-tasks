// рабочее решение с использованием рекурсии
// оно проигрывает в производительности решению из динамического программирования
// но зато здесь можно хорошо разобраться с пониманием рекурсии, что я и сделал

const minCostClimbingStairs = (cost) => {
	const costMap = [cost[0], cost[1]];

	const calcCost = n => {
		if (costMap[n] !== undefined) return costMap[n];

		let value = Math.min(calcCost(n - 1), calcCost(n - 2)) + cost[n];
		costMap[n] = value;
		return value
	};

	calcCost(cost.length - 1);

	return Math.min(costMap[costMap.length - 1], costMap[costMap.length - 2])
}

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6