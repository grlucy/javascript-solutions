/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const sorted = [...nums].sort((a,b)=>a-b)
    return sorted[Math.round(nums.length/2 - 1)]
}