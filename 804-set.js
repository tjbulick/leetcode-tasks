const uniqueMorseRepresentations = (words) => {
    const alphabet = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    const transformed = words.map((word) => {
        return word.split('').map((char) => alphabet[char.charCodeAt(0) - 97]).join('');
    });
    
    return new Set(transformed).size;
};