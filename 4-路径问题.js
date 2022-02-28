const fs = require('fs');

//用fs模块操作文件时，如果提供的操作路径是以../开头的相对路径，很容易出现动态路径拼接错误
//因为代码运行时，会以执行node命令时所处的目录，动态拼接路径
//要解决这个问题，可直接提供完整的存放路径


/* fs.readFile('../Node.js/1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功' + data);
}) */



//绝对路径移植性差，不利于维护
/* fs.readFile('E:\\github\\Node.js\\1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功' + data);
})
 */

//__dirname表示当前文件所处的目录
console.log(__dirname);

fs.readFile(__dirname + '/1.txt', 'utf-8', function (err, data) {
    if (err) {
        return console.log('读取文件失败' + err.message);
    }
    console.log('读取文件成功' + data);
})