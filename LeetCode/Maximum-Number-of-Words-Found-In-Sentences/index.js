/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let max = 1
    sentences.forEach(s => {
        const words = s.split(" ").length
        max = Math.max(max, words)
    })
    return max
}