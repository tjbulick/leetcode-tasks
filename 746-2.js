// it's good to use this solution when we can't modify original array

const minCostClimbingStairs = (cost) => {
	let twoStepBefore = cost[0];
	let oneStepBefore = cost[1];
	for (let i = 2; i < cost.length; i++) {
		let curr = Math.min(twoStepBefore, oneStepBefore) + cost[i];
		twoStepBefore = oneStepBefore;
		oneStepBefore = curr;
	}

	return Math.min(twoStepBefore, oneStepBefore)
}

console.log(minCostClimbingStairs([10, 15, 20])); // 15
console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1])); // 6