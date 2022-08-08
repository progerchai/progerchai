/*
 * @lc app=leetcode.cn id=966 lang=javascript
 *
 * [966] 元音拼写检查器
 */

// @lc code=start
/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */
 var spellchecker = function(wordlist, queries) {
    const wordlistClone = [...wordlist]
    const easyQueries = [...queries]
    const resultPack = []
    const wordlistMap = {}
    const wordlistLowerMap = {} 
    const wordlistNohandlerMap = {} // 完全一致

    wordlistClone.forEach((item,index)=>{
        // 元音只可能是小写的
        const result = item.toLowerCase().replace(/[a|e|i|o|u]/g,'-')

        // 完全匹配
        if(!wordlistNohandlerMap[item] && wordlistNohandlerMap[item] !==0){
            wordlistNohandlerMap[item] = index
        }
        // 大小写匹配
        if(!wordlistLowerMap[item.toLowerCase()] && wordlistLowerMap[item.toLowerCase()] !== 0){
            wordlistLowerMap[item.toLowerCase()] = index            
        }
        // 元音匹配
        if(!wordlistMap[result] && wordlistMap[result] !== 0){
            wordlistMap[result] = index
        }

    })
    console.log(wordlistNohandlerMap,wordlistLowerMap,wordlistMap)
    easyQueries.forEach((item)=>{
        // todo: 大小写优先级，高于元音
        const result = item.toLowerCase().replace(/[a|e|i|o|u]/g,'-')
        let findValue = null
        if(wordlistNohandlerMap[item] >= 0){
            findValue = wordlistNohandlerMap[item]
        }else if(wordlistLowerMap[item.toLowerCase()] >= 0){
            findValue = wordlistLowerMap[item.toLowerCase()]
        }else{
            findValue = wordlistMap[result]
        }
        resultPack.push(wordlist[findValue] || '')
    })
   return resultPack
};

// @lc code=end