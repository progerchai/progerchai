/** leetcode 628 三个数的最大乘积
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let mutip = 1;
  if (nums.length < 3) {
    return null;
  } else if (nums.length === 3) {
    nums.forEach((item) => {
      mutip = mutip * item;
    });
  } else {
    let sort = nums.sort(function (a, b) {
      return a - b;
    });
    let a1 = sort[0] * sort[1] * sort[2];
    let a2 = sort[0] * sort[1] * sort[sort.length - 1];
    let a3 = sort[0] * sort[sort.length - 2] * sort[sort.length - 1];
    let a4 =
      sort[sort.length - 3] * sort[sort.length - 2] * sort[sort.length - 1];
    mutip = Math.max(a1, a2, a3, a4);
    console.log([a1, a2, a3, a4]);
  }
  return mutip;
};
// 如数组中元素个数满足要求,则只有四种情况可能出现最大值
// 3 0
// 2 1
// 1 2
// 0 3
