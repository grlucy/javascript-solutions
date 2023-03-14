/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = []
    const indices = []
    const arr = s.split('')
    arr.forEach((ltr, i) => {
        if (['a', 'e', 'i', 'o', 'u'].includes(ltr.toLowerCase())) {
            vowels.push(ltr)
            indices.push(i)
        }
    })
    indices.forEach(i => {
        arr[i] = vowels.pop()
    })
    return arr.join('')
}