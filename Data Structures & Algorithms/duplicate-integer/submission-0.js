class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const size = nums.length;
        const uniqueArrs = new Set(nums);
        const isDuplicate = size !== uniqueArrs.size;

        return isDuplicate;
    }
}
