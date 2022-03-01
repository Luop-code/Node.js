const http = require('http');
const sever = http.createServer();
//req是请求对象，包含了与客户端相关的数据和属性
sever.on('request', (req, res) => {
    //req.url是客户端请求的 URL 地址
    const url = req.url;

    //req.method是客户端请求的method类型
    const method = req.method;
    const str = `Your request url is ${url},and request method is ${method}`;
    console.log(str);
    //调用res.end()方法，向客户端响应一些内容
    res.end(str)
});
sever.listen(80, () => {
    console.log('sever running at http://127.0.0.1');
})