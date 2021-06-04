// import xlsx from 'node-xlsx';
var xlsx = require('node-xlsx');
var fs = require('fs')
const data = [[1, 2, 3], [true, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var buffer = xlsx.build([{ name: "mySheetName", data: data }]); // Returns a buffer
console.log(1111, buffer)
fs.writeFile('data.xls', buffer, (err) => {
    if (err) {
        throw err
    }
    else {
        console.log('文件已被保存')
    }
})