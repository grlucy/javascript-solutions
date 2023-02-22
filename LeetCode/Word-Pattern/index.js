/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const obj = {}
    const arr = s.split(" ")
    if (pattern.length !== arr.length) return false
    for (let i = 0; i < pattern.length; i++) {
        if (!obj[pattern[i]]) {
            if (Object.entries(obj).map(x => x[1]).includes(arr[i])) {
                return false
            }
            obj[pattern[i]] = arr[i]
        }
        else if (obj[pattern[i]] !== arr[i]) {
            return false
        }
    }
    return true
}