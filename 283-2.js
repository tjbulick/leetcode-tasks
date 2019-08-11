const moveZeroes = (a) => {
	let index = 0;

	for (let i = 0; i < a.length; i++) {
		if (a[i] !== 0) {
			if (index !== i) {
				a[index] = a[i];
				a[i] = 0;
			}
			index++
		}
	}
	return a
}

console.log(moveZeroes([3,3,0,1,0,3,12]))