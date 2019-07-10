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