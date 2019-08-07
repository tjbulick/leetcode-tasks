const alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const uniqueMorseRepresentations = (words) => {
	const transformations = new Map();

	let transformedString = '';
	for (const word of words) {
		for (letter of word) {
			transformedString += alphabet[letter.charCodeAt() - 97];
		}

		if (transformations.has(transformedString)) {
			transformations.set(transformedString, transformations.get + 1);
		} else {
			transformations.set(transformedString, 1);
		}

		let transformedString = '';
	}

	return transformations.size;
}