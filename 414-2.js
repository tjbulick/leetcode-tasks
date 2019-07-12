const thirdMax = (arr) => {
    let max1 = undefined, max2 = undefined, max3 = undefined;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === max1 || arr[i] === max2 || arr[i] === max3) continue;

        if (max1 === undefined || arr[i] > max1) {
            max3 = max2;
            max2 = max1;
            max1 = arr[i];
        } else if (max2 === undefined || arr[i] > max2) {
            max3 = max2;
            max2 = arr[i];
        } else if (max3 === undefined || arr[i] > max3) {
            max3 = arr[i];
        }
    }
    return max3 === undefined ? max1 : max3;
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax([1, 2])); // 2
console.log(thirdMax([2, 2, 3, 1])); // 1
console.log(thirdMax([1,2,2,5,3,5])) // 2
console.log(thirdMax([3,3,4,3,4,3,0,3,3])) // 0