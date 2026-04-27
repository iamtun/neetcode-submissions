class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};

        const size = nums.length;
        if (size === 1) return nums;

        nums = nums.sort((a, b) => a - b);

        const uniqueArr = new Set(nums);
        if (uniqueArr.size === size) {
            return nums.slice(0, k);
        }

        for (let i = 0; i < size; i++) {
            if (nums[i] in obj) {
                obj[nums[i]] += 1;
            } else {
                obj[nums[i]] = 1;
            }
        }

        const results = Object.keys(obj)
            .sort((key1, key2) => obj[key2] - obj[key1])
            .map((key) => key);

        console.log(results);
        return results.slice(0, k);
    }
}
