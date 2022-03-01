const http = require('http');
const sever = http.createServer();

sever.on('request', (req, res) => {
    //定义一个字符串，包含中文
    const str = `您请求的 URL地址是${req.url},请求的method类型是${req.method}`;

    //需要设置响应头Content-Type,解决中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8');
    //res.end将内容响应给客户端
    res.end(str);
})
sever.listen(80, () => {
    console.log('sever running at http://127.0.0.1');
})