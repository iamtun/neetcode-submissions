class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        uni_nums = set(nums)
        return len(nums) != len(uni_nums)