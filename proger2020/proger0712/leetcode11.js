/**
 * @param {number[]} height
 * @return {number}
 */

// 执行时间：1040 ms  ，内存消耗：36.3MB

var maxArea = function (height) {
  //思路 ：如例子中，将数字假象成木板
  // 1.假设有9块木板，那么最终容器可容纳的最多水的情况一定由第x,y两块木板围起来x<y
  // 2.9块木板一共可以产生8和空隙可以装水，那么最后的最大容量一定是由1-8个空隙组成的
  // 3.假设我们只调查 i 个空隙的情况，只要一个index(default = 0)不断往右移，在计算(index,index+i)出结果之后于初始值进行比较，如果大于初始值，就替换掉初始值并记录当前状态。
  // 遍历结束之后，最终的结果和状态就是我们的最终结果
  let max = 0;
  // 分别计算(1,height-1)
  for (let i = 1; i < height.length; i++) {
    let index = 0;
    while (index + i < height.length) {
      let left = height[index];
      let right = height[index + i];

      //获取边界left 和right，去计算当前状态当容纳水量
      let value = minNumber(left, right) * i;
      if (value > max) {
        max = value;
      }
      index++;
    }
  }

  return max;
};

// 返回两个数的最小值
var minNumber = function (left, right) {
  return left - right < 0 ? left : right;
};
