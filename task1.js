// строки, aaaa, филипп, a4

let str = 'aaaa';

/*
0. char 'a'; i = 1; k = 1;
1. char 'a'; i = 2; k = 2;
2. char 'a'; i = 3; k = 3;
3. char 'b'; i = 4; k = 1;
*/

const convert = (string) => {
	let result = '';
	currChar = string[0];
	let i = 1;
	let k = 1;
	let flag = false;

	while (i < string.length) {

		if (string[i] === currChar) {
			k++;
		} else {
			flag = true;
			result += currChar;
			if (k > 1) {
				result += k;
			};
			k = 1;
			currChar = string[i];
		}
		i++;
	}

	if (flag) {
		result += currChar;
		if (k > 1) {
			result += k;
		};
	}

	return result
}