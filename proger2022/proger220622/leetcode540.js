
//  执行用时：84ms
//  内存消耗：46.6MB
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNonDuplicate = function(nums) {
  let [obj,resObj] = [{},{}]
  nums.forEach(item=>{
      if(obj[item]){
          obj[item]++
      }else{
          obj[item] = 1
      }
  })
   for (let key in obj) {
          resObj[obj[key]] = key;
  }

  return parseInt(resObj[1])
};