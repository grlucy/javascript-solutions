function intToBin(int) {
  return (int >>> 0).toString(2)
}
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const ans = []
    for (let i = 0; i <= n; i++) {
        const bin = intToBin(i)
        ans.push(bin.split('').filter(str => str === '1').length)
    }
    return ans
}