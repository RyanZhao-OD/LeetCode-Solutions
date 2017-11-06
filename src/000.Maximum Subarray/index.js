/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    let cur = 0;
    let max = -Infinity;
    for (let i = 0, length = nums.length; i < length; i++) {
        cur += nums[i];
        max = Math.max(max, cur);
        cur = (cur < 0) ? 0 : cur;
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));