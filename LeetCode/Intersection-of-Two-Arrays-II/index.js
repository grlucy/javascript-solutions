/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const x = [];
  for (const num of nums1) {
    if (nums2.includes(num)) {
      x.push(num);
      nums2.splice(nums2.indexOf(num), 1);
    }
  }
  return x;
};
