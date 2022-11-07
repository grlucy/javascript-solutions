/**
 * @param {string} s
 * @return {string[]}
 */
var cellsInRange = function(s) {
    const alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const startCol = alph.indexOf(s[0])
    const startRow = parseInt(s[1])
    const endCol = alph.indexOf(s[3])
    const endRow = parseInt(s[4])
    const colDiff = endCol - startCol
    const rowDiff = endRow - startRow
    let res = []
    for (let col = 0; col < colDiff + 1; col++) {
        for (let row = 0; row < rowDiff + 1; row++) {
            res.push(`${alph[startCol + col]}${startRow + row}`)
        }
    }
    return res
}