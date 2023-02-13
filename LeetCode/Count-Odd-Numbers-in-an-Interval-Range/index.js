/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    const diff = high - low
    return low % 2 === 0 ? diff / 2 : Math.floor(diff / 2) + 1
}