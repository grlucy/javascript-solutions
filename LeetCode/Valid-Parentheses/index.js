/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const pairs = ["()", "{}", "[]"]
    let str = s
    for (let i = 0; i < str.length - 1; i++) {
        if (pairs.includes(str[i]+str[i+1])){
            str = str.slice(0, i) + str.slice(i + 2)
            i = -1
        }
    }
    if (str.length > 0) return false
    return true
}