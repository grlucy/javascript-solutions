/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
    const arr = s.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i+1]){
            arr.splice(i, 2)
            i = i === 0 ? i - 1 : i - 2
        }
    }
    return arr.join('')
}