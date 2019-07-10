// филипп, банкомат, деньги

const isCashAvailable = (moneySetup, amount) => {

	/* как выглядит конфиг денег в банкомате:
	{
		'5000': 10 (кол-во купюр)
		'1000': 10
		'500': 10
		'200': 10
		'100': 10
	}
	*/

	while (amount >= 5000 && moneySetup['5000'] > 0) {
		amount -= 5000;
		moneySetup['5000']--;
	}

	while (amount >= 1000 && moneySetup['1000'] > 0) {
		amount -= 1000;
		moneySetup['1000']--;
	}

	while (amount >= 500 && moneySetup['500'] > 0) {
		amount -= 500;
		moneySetup['500']--;
	}

	while (amount >= 200 && moneySetup['200'] > 0) {
		amount -= 200;
		moneySetup['200']--;
	}

	while (amount >= 100 && moneySetup['100'] > 0) {
		amount -= 100;
		moneySetup['100']--;
	}
	
	return !Boolean(amount);
}