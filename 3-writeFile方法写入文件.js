const fs = require('fs');

//调用fs.writeFile()方法
//参数1：文件存放路径
//参数2：要写入的内容
//参数3：回调函数
fs.writeFile('../Node.js/1.txt', 'hello', function (err) {
    //如果写入成功，则err的值为null
    //如果写入失败，则err的值为错误对象
    console.log(err);
})