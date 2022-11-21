/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let newNums = [target, ...nums].sort((a,b) => a-b)
    return newNums.indexOf(target)
}