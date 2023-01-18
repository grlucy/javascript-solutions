/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const replaced = s.replace(/[\W_]+/g,"").toLowerCase()
    for (let i = 0; i < s.length / 2; i++) {
        if (replaced[i] !== replaced[replaced.length - i - 1]) return false
    }
    return true
}