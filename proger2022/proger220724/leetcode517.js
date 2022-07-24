/*
 * @lc app=leetcode.cn id=517 lang=javascript
 *
 * [517] 超级洗衣机
 */

// @lc code=start
/**
 * @param {number[]} machines
 * @return {number}
 */
 var findMinMoves = function (machines) {
    function sum(arr) {
        if (arr.length === 0) {
            return 0
        }
        return arr.reduce(function (prev, curr) {
            return prev + curr
        });
    }
    const size = machines.length
    const countSum = sum(machines)
    const avg = countSum / size
    const mod = countSum % size
    if (mod !== 0) {
        return -1
    }

    const findLeft = (arr,index) => {
        return sum(arr.slice(0, index + 1)) - avg * (index + 1) > 0 ? sum(arr.slice(0, index + 1)) - avg * (index + 1) : 0
    }

    // 开始计算
    let judgeLeft = machines.map((machine, index) => findLeft(machines,index))
    let judgeRight = machines.map((machine, index) => findLeft([...machines].reverse(),index) + judgeLeft[size - 1 -index]).sort((a, b) => b - a)
    return judgeRight[0]
};

// @lc code=end