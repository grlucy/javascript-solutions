/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length < 2) return 0
    let buyIndex = 0
    let sellIndex = 1
    let maxProfit = 0
    while (sellIndex < prices.length) {
        if (prices[buyIndex] < prices[sellIndex]) {
            let temp = prices[sellIndex] - prices[buyIndex]
            maxProfit = Math.max(maxProfit, temp)
        } else {
            buyIndex = sellIndex
        }
        sellIndex++
    }
    return maxProfit
}