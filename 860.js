// 860. Lemonade Change
// https://leetcode.com/problems/lemonade-change/

const lemonadeChange = (bills) => {
	const money = {
		'5': 0,
		'10': 0
	};

	for (const bill of bills) {

		if (bill === 5) {
			money['5'] += 1;
			continue;
		}

		if (bill === 10) {
			if (money['5'] > 0) {
				money['10'] += 1;
				money['5'] -= 1;
				continue;
			} else {
				return false
			}
		}

		if (bill === 20) {
			if (money['10'] >= 1 && money['5'] >= 1) {
				money['10'] -= 1;
				money['5'] -= 1;
				continue;
			}

			if (money['5'] >= 3) {
				money['5'] -= 3;
				continue;
			}

			return false
		}
	}

	return true
}