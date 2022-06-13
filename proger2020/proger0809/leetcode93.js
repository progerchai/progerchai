/**
 *  93. 复原IP地址
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 * 有效的 IP 地址正好由四个整数（每个整数位于 0 到 255 之间组成），整数之间用 '.' 分隔。
 */

/**
 * @param {string}
 * @return {string[]}
 * 思路 :
 * 输入的字符串一定会被分割成四段，每一段会有1～3个字符，整段ip地址最多有3*4 = 12的长度
 */
var restoreIpAddresses = function (s) {
  let sizeLeft = 12 - s.length;
  let len = s.length;
  let out = [];
  for (let A = 1; A <= 3; A++) {
    if (len - A > 9 || len - A < 3) {
      continue;
    }
    for (let B = 1; B <= 3; B++) {
      if (len - A - B > 6 || len - A - B < 2) {
        continue;
      }
      for (let C = 1; C <= 3; C++) {
        if (len - A - B - C > 3 || len - A - B - C < 1) {
          continue;
        }
        //获取得到一个截取方式
        let size = [];
        size.push(A, B, C, len - A - B - C);
        let index = 0;
        let result = "";
        for (let i = 0; i < 4; i++) {
          //截取字段并转为数字格式，并判断数值是否在0～255之间
          let number = parseInt(s.slice(index, index + size[i]));
          if (i == 0 && number >= 0 && number <= 255) {
            result += number;
          } else if (number >= 0 && number <= 255) {
            result += "." + number;
          } else {
            break;
          }

          index += size[i];
        }
        if (result.length == len + 3) {
          out.push(result);
        }
      }
    }
  }

  return out;
};
