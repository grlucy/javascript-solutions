/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
    const grid = {
        0: { 0: '', 1: '', 2: '' },
        1: { 0: '', 1: '', 2: '' },
        2: { 0: '', 1: '', 2: '' }
    }
    let result
    moves.forEach((move, index) => {
        const player = index % 2 === 0 ? 'X' : 'O'
        grid[move[0]][move[1]] = player
    })
    for (let i = 0; i < 3; i ++) {
        // horizontal wins
        if (grid[i]['0'] === grid[i]['1'] && grid[i]['0'] === grid[i]['2'] && grid[i]['0'] !== '') {
            result = grid[i]['0'] === 'X' ? 'A' : 'B'
        }
        // vertical wins
        else if (grid['0'][i] === grid['1'][i] && grid['0'][i] === grid['2'][i] && grid['0'][i] !== '') {
            result = grid['0'][i] === 'X' ? 'A' : 'B'
        }
        // diagonal wins
        else if (i === 0 && grid['1']['1'] !== '' && ((grid[i][i] === grid[i + 1][i + 1] && grid[i][i] === grid[i + 2][i + 2]) || (grid[i][i + 2] === grid[i + 1][i + 1] && grid[i][i + 2] === grid[i + 2][i]))) {
            result = grid['1']['1'] === 'X' ? 'A' : 'B'
        }
    }
    if (!result) {
        result = moves.length === 9 ? 'Draw' : 'Pending'
    }
    return result
};