const alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];

const uniqueMorseRepresentations = (words) => {
	const transformations = {};

	let transformedString = '';
	for (const word of words) {
		for (const letter of word) {
			transformedString += alphabet[letter.charCodeAt() - 97];
		}

		if (transformedString in transformations) {
			transformations[transformedString] += 1;
		} else {
			transformations[transformedString] = 1;
		}

		transformedString = '';
	}

	return Object.getOwnPropertyNames(transformations).length;
}

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));