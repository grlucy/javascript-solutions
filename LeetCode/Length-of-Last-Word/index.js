/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    const arr = s.split(" ").filter(i => i.length > 0)
    return arr.pop().length
}