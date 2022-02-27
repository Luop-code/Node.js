//导入fs模块
const fs = require('fs');

//调用fs。readFile()方法读取文件
//参数1：读取文件的存放路径
//参数2：读取文件时采用的编码格式
//参数3：回调函数,拿到读取失败和成功的结果 err dataStr

fs.readFile('../Node.js/1.txt', 'utf-8', function (err, dataStr) {
    //读取成功，err的值为null
    //读取失败，err的值为错误对象，dataStr的值为undefined
    console.log(err);
    console.log('-----------');
    console.log(dataStr);
})