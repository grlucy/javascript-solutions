/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let res = 0

    g.sort((a,b) => a-b)
    const sSort = [...s].sort((a,b) => a-b)

    for (let i = 0; i < s.length; i++) {
        const need = g[i]
        const firstIndex = sSort.findIndex(el => el >= need)
        if (firstIndex < 0) {
            break
        } else {
            res++
            sSort.splice(firstIndex, 1)
        }
    }

    return res
}