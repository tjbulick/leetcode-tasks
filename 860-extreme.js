// 860. Lemonade Change
// https://leetcode.com/problems/lemonade-change/
// Extreme version
// checked using leetcode benchmark, it works faster!

const lemonadeChange = bills => {
	let fives = 0, tens = 0, length = bills.length;

	for (let i = 0; i < length; i++) {

		if (bills[i] === 5) {
			fives += 1;
			continue;
		}

		if (bills[i] === 10) {
			if (fives > 0) {
				tens += 1;
				fives -= 1;
				continue;
			} else {
				return false
			}
		}

		if (bills[i] === 20) {
			if (tens >= 1 && fives >= 1) {
				tens -= 1;
				fives -= 1;
				continue;
			}

			if (fives >= 3) {
				fives -= 3;
				continue;
			}

			return false
		}
	}

	return true
}