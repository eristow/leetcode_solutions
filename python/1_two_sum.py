class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # SOL 1: Brute Force. Time: O(n^2). Space: O(1).
        # for i, num1 in enumerate(nums):
        #     for j, num2 in enumerate(nums[i+1:], i+1):
        #         # print(num1, num2)
        #         # print(i, j)
        #         # print(enumerate(nums))
        #         # print(enumerate(nums, start=i+1))
        #         if num1 + num2 == target:
        #             return [i, j]
        
        # SOL 2: 2 pass hash table. Time: O(n). Space: O(n).
        # dict = {}
        # for i, num in enumerate(nums):
        #     dict[num] = i
        
        # for i, num in enumerate(nums):
        #     complement = target - num
        #     if (complement in dict and dict[complement] != i):
        #         return [i, dict[complement]]

        # SOL 3: 1 pass hash table. Time: O(n). Space: O(n).
        dict = {}
        for i, num in enumerate(nums):
            complement = target - num
            if (complement in dict):
                return [dict[complement], i]
            dict[num] = i