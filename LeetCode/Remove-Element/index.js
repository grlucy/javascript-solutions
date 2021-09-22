/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    nums.forEach((num, i) => {
        if (num === val) {
            nums[i] = "_"
        }
    })
    nums.push("_")
    nums.sort()
    return nums.indexOf("_")
};