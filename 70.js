const fib = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fib(n - 1) + fib(n - 2)
}

const climbStairs = (n) => fib(n + 1);

console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(44));

// this solution has an "time limit exceeded" error on leetcode