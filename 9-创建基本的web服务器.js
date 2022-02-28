//1-导入http模块
const http = require('http');

//2-创建web服务器实例
const sever = http.createServer();

//3-为服务器实例绑定request事件，监听客户端请求
sever.on('request', function (req, res) {
    console.log('Someone visit our web sever.');
})

//4-启动服务器
sever.listen(8080, function () {
    console.log('sever running at http://127.0.0.1:8080');
})