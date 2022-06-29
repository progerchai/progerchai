
//  执行用时：588ms
//  内存消耗：42.2MB
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 var containsNearbyAlmostDuplicate = function(nums, k, t) {
    let result = false
    nums.forEach((num,index)=>{
         if(result){
            return false
        }
        for(let i = index+1;i<nums.length;i++){
            if(Math.abs(num - nums[i]) <= t && Math.abs(index - i)<=k){
                result = true
                break;
            }
        }
    })
    return result
};