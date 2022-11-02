/**
 * @param {number} num
 * @return {number}
 */
var minimumSum = function(num) {
    let sorted = num.toString().split("").sort((a,b) => a-b)
    const new1 = parseInt(sorted[0] + sorted[2])
    const new2 = parseInt(sorted[1] + sorted[3])
    return new1 + new2
}