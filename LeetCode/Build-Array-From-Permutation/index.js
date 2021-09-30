/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    const ans = []
    nums.forEach(num => {
        ans.push(nums[num])
    })
    return ans
}