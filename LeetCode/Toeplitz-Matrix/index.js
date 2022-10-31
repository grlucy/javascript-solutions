/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {    
    for (let i = 0; i < matrix.length - 1; i++) {
        const arr = matrix[i]
       for (let j = 0; j < arr.length - 1; j++) {
           const int = arr[j]
           if (matrix[i + 1][j + 1] !== int) return false
       }
    }
    return true
};