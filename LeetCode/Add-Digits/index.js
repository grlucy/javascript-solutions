/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let sum = num
    while (sum >= 10) {
        let newSum = 0
        const arr = sum.toString().split("").map(str => parseInt(str))
        arr.forEach(i => newSum += i)
        sum = newSum
    }
    return sum
}