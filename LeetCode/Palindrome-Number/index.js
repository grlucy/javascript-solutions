/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString()
    const arr = str.split('')
    let rev = ''
    while (arr.length > 0) {
        rev += arr.pop()
    }
    return str === rev
}