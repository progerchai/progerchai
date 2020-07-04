/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// javascript 方法：运行时间--156 ms	内存消耗--35.6 MB
var twoSum = function (nums, target) {
  let splitIndex = 0,
    arr_length = nums.length;
  for (let i = 0; i < arr_length; i++) {
    let firstNumber = nums[0];
    nums.shift();
    splitIndex++;
    if (nums.indexOf(target - firstNumber) >= 0) {
      return [i, nums.indexOf(target - firstNumber) + splitIndex];
    }
  }
  return [];
};

//python方法1:运行时间--64 ms	内存消耗--15.2 MB
// class Solution:
//     def twoSum(self, nums: List[int], target: int) -> List[int]:
//         num_dict = {}
//         for i, j in enumerate(nums):
//             if num_dict.get(target-j) is not None:
//                 return [num_dict[target-j], i]
//             num_dict[j] = i

//python方法2:运行时间--5896 ms	内存消耗--14.5 MB
// class Solution:
//     def twoSum(self, nums: List[int], target: int) -> List[int]:
//         num_dict = {}
//         for i in range(len(nums)):
//             for j in range(i+1, len(nums)):
//                 if nums[i] + nums[j] == target:
//                    return [i, j]
//         return []
