/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const map = {}
    nums1.forEach(num => {
        if (!map[num]) map[num] = 1
    })
    nums2.forEach(num => {
        if (map[num]) map[num]++
    })
    const arr = []
    for (const [key, value] of Object.entries(map)) {
        if (value > 1) arr.push(key)
    }
    return arr
}