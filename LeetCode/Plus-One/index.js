/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const res = digits
    function increment (arr, i) {
        if (i === -1){
            arr.unshift(1)
            return arr
        }
        const temp = arr[i] + 1
        if (temp > 9) {
            arr[i] = 0
            increment(arr, i - 1)
        } else {
            arr[i] = temp
            return arr
        }
    }
    increment(res, res.length - 1)
    return res
}