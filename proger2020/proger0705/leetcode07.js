/**
 * @param {number} x
 * @return {number}
 */

//  执行用时：88ms
//  内存消耗：37.1MB
var reverse = function (x) {
  //存储正负
  let _symbol = "";
  if (x < 0) {
    _symbol = "-";
  }
  //就数字打断成字符数组,并反向,并拼接
  let numberSplit = x.toString().split("").reverse().join("");
  let result = parseInt(_symbol + numberSplit);
  // 判断整数溢出
  if (result > Math.pow(2, 31) - 1 || result < -Math.pow(2, 31)) {
    return 0;
  } else {
    return result;
  }
};
