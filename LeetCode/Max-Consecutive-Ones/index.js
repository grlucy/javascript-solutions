/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const lengths = []
    let x = 0
    for (const num of nums) {
        if (num === 1) {
            x += 1
        } else {
            lengths.push(x)
            x = 0
        }
    }
    if (x > 0) lengths.push(x)
    return Math.max(...lengths)
}