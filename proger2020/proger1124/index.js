// 导入 cypress 模块
const cypress = require('cypress')

// 执行 run 命令
cypress.run({
    spec: './cypress/integration/mytest/momodel_test.js'
})
.then((results) => {
    // 打印结果
    // console.log('打印结果:::::',results)
    // console.log('-----------------------reporter-------------------------------',results.config.resolved.browsers)
    // throw new Error('new error')
})
.catch((err) => {
    // 抓取错误信息并打印
    console.log('抓取错误信息并打印')
    console.error(err)
})


// // 执行 open 命令
// cypress.open({
//     // 命令参数列表
//     config: {
//         baseUrl: 'http://localhost:8080',
//     },
//     env: {
//         login_url: '/login',
//         products_url: '/products',
//     }
// })
