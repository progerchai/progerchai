
//  执行用时：204ms
//  内存消耗：71.8MB
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    if(!root || !root.val){
        return 0
    }
    let centerValue = 0
    if(root.val <= high && root.val >= low){
        centerValue = root.val
    }
    return  rangeSumBST(root.left,low,high) + centerValue + rangeSumBST(root.right,low,high)


};
