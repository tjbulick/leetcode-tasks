// https://leetcode.com/problems/two-sum/submissions/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, k) => {
    
    let numsCopy = [...nums];
    let result = [];
    
	numsCopy = numsCopy.sort(function(a, b) {
		return a - b;
	});

	let li = 0, ri = numsCopy.length - 1;

	while (li != ri) {
		let currSum = numsCopy[li] + numsCopy[ri];
		if (currSum < k) {
			li++;
		} else if (currSum > k) {
			ri--;
		}
		else {
            result[0] = nums.indexOf(numsCopy[li]);
            result[1] = nums.lastIndexOf(numsCopy[ri]);
			return result
		};
	}
}

==================================

// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// 167. Two Sum II - Input array is sorted

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, k) {
    
    let result = [];

	let li = 0, ri = nums.length - 1;

	while (li != ri) {
		let currSum = nums[li] + nums[ri];
		if (currSum < k) {
			li++;
		} else if (currSum > k) {
			ri--;
		}
		else {
            result.push(li + 1);
            result.push(ri + 1);
			return result
		};
	}
};

==================================

// https://leetcode.com/problems/jewels-and-stones/
// 771. Jewels and Stones

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const types = J.split('');
    let k = 0;
    
    for (let i = 0; i < types.length; i++) {
        for (let j = 0; j < S.length; j++) {
            if (types[i] === S[j]) {
                k++;
            }
        }
    }
    
    return k
};

==================================

// 957. Prison Cells After N Days

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
const prisonAfterNDays = (cells, N) => {
	let newCells = [];
    for (let i = 1; i <= N; i++) {
        for (j = 0; j < cells.length; j++) {
            if ((cells[j - 1] === 0 && cells[j + 1] === 0) || (cells[j - 1] === 1 && cells[j + 1] === 1)) {
                newCells[j] = 1
            } else newCells[j] = 0;
        }
        cells = [...newCells]
    }
    return newCells
};

console.log(prisonAfterNDays([0,1,0,1,1,0,0,1], 7))

==================================

// бинарный поиск, двоичный

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const binarySearch = (arr, target) => {
	let lIndex = 0, rIndex = arr.length - 1, midIndex;
	let result;

	while (lIndex !== rIndex) {
		midIndex = (rIndex + lIndex) / 2;

		if ((rIndex - lIndex + 1) % 2 === 0) {
			//если кол-во элементов в подмассиве четное
			midIndex = Math.ceil(midIndex);
		}

		if (arr[midIndex] > target) {
			rIndex = midIndex - 1;
		} else if (arr[midIndex] < target) {
			lIndex = midIndex + 1;
		} else {
			lIndex = midIndex;
			rIndex = midIndex;
		}
	}

	result = lIndex; //или правому, неважно
	return (arr[result] !== target) ? -1 : result // вернуть -1 если не нашли
	// return result
};

console.log(binarySearch(arr, 9))

==================================

const bubbleSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = 0; j < arr.length - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]] //es6 feature
			}
		}
	}

	return arr
}

let arr = [3, 1, 6, 5, 9, 3, 6];
console.log(bubbleSort(arr));

==================================

// 394. Decode String
// https://leetcode.com/problems/decode-string/

const decodeString = (str) => {
	let result = '';
	let i = 0;

	// напишем метод для получения индекса правой скобки по индексу левой
	let getRightBracket = (str, leftBracket) => {
		let numberOfLeft = 1, numberOfRight = 0, i = leftBracket + 1;

		while (numberOfLeft !== numberOfRight) {
			if (str[i] === '[') { numberOfLeft++ }
			if (str[i] === ']') { numberOfRight++ }
			i++
		}
		return i - 1
	}

	// напишем метод splice для строк так как надо удалять и вставлять
	let spliceString = (str, start, deleteCount, add) => {
		let arr = str.split('');
		arr.splice(start, deleteCount, add)
		return arr.join('')
	}

	while (i < str.length && str.indexOf('[') !== -1) {
		if (isNaN(Number(str[i]))) {
			i++
		} else {
			let exp, k; // expression, сколько раз для повторять
			let leftBracket = str.indexOf('[', i);
			k = Number(str.substring(i, leftBracket))
			let rightBracket = getRightBracket(str, leftBracket);
			exp = str.substring(leftBracket + 1, rightBracket);
			exp = exp.repeat(k) // размножаем exp сколько надо раз
			str = spliceString(str, i, rightBracket - i + 1, exp);
		}
	}

	return str
}

console.log(decodeString('3[a]2[bc]')) //должно быть "aaabcbc"

==================================

const factorial = (n) => {
	return (n === 0) ? 1 : n * factorial(n - 1)
}

console.log(factorial(3))

==================================

const fizzBuzz = (n) => {
	let result = [];

	for (let i = 1; i <= n; i++) {

		if (i % 3 === 0 && i % 5 === 0) result.push('FizzBuzz') 
		else if (i % 3 === 0) result.push('Fizz') 
		else if (i % 5 === 0) result.push('Buzz') 
		else result.push(String(i));
	}
	return result
}

console.log(fizzBuzz(35))

==================================

// найти два элемента которые встречаются один раз
// умный способ

Object.prototype['0'] = () => {
	return 0
};

const func = (arr) => {
	let result = []

	const obj = {}; // hashMap

	for (let i = 0; i < arr.length; i++) {
		if (obj.hasOwnProperty(String(arr[i]))) obj[String(arr[i])] += 1
			else obj[String(arr[i])] = 1;

		// if (obj[String(arr[i])] === undefined) obj[String(arr[i])] = 1
			// else obj[String(arr[i])]++;
	}

	for (key in obj) {
		if (obj.hasOwnProperty(key) && obj[key] === 1) result.push(Number(key))
	}
	return result
}

const arr = [0, 0, 1, 1, 4, 5, 4, 2, 2, 19]
console.log(func(arr))

==================================

// найти два элемента которые встречаются один раз
// топорный способ

const func = (arr) => {

	arr.sort((a, b) => a - b);
	let result = [];
	for (let i = 0; i < arr.length; i++) {
		currDigit = arr[i];
		if (arr[i] !== arr[i + 1] && arr[i] !== arr[i - 1]) {
			result.push(arr[i])
		}
	}
	return result
}

console.log(func[1, 2, 2, 3])

==================================

const insertionSort = (arr) => {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		while (j >= 0 && arr[j]> arr[j + 1]) {
			[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			j--
		}
	}

	return arr
}

let arr = [322, 1337, 69, 505, 911, 37, 666];
console.log(insertionSort(arr));

==================================

const selectionSort = (arr) => {
	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] > arr[j]) {
				[arr[i], arr[j]] = [arr[j], arr[i]]
			}
		}
	}

	return arr
}

let arr = [3, 1, 6, 5, 9, 3, 6];
console.log(selectionSort(arr));

==================================

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

==================================

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

==================================

// найти пересечение элементов двух массивов и вывести в виде массива
// умный способ через хэш таблицу (точнее через сет)

const twoArrays = (a, b) => {
	let obj = {};
	for (let i = 0; i < a.length; i++) {
		obj[String(a[i])] = true;
	}

	for (key in obj) {
		if (b.indexOf(Number(key)) !== -1) {
			result.push(Number(key))
		}
	}
}

==================================

// найти пересечение элементов двух массивов и вывести в виде массива
// топорный способ

const twoArrays = (a, b) => {
	a.sort((a, b) => a - b);
	b.sort((a, b) => a - b);

	currDigit = a[0];
	for (let i = 1; i < a.length; i++) {
		if (a[i] === currDigit) {
			a.splice(i, 1);
			currDigit = a[i]
		}
			else {
				currDigit = a[i]
			}
	}

	for (let i = 1; i < b.length; i++) {
		if (b[i] === currDigit) {
			b.splice(i, 1);
			currDigit = b[i]
		}
			else {
				currDigit = b[i]
			}
	}

	let result = [];

	a.forEach((elem) => {
		if (b.indexOf(elem) !== -1) result.push(elem)
	})

	return result
}