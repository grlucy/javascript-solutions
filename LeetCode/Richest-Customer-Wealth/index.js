/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richestWealth = 0
    accounts.forEach((acct, i) => {
        const wealth = acct.reduce((x, y) => x + y)
        richestWealth = Math.max(richestWealth, wealth)
    })
    return richestWealth
}