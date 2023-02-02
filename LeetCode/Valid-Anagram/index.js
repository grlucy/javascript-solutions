/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length === t.length) {
        const x = s.split('').sort().join('')
        const y = t.split('').sort().join('')
        if (x === y) return true
    }
    return false
}