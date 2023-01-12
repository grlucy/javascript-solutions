/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // return fibonacci number
    let prev2 = 0
    let prev = 1
    for (let i = 0; i < n; i++) {
        let numWays = prev2 + prev
        prev2 = prev
        prev = numWays
    }
    return prev
}