const http = require('http');
const sever = http.createServer();

sever.on('request', (req, res) => {
    //1.获取请求的url地址
    const url = req.url;

    //2.设置默认的响应内容为404 Not Found
    let content = '<h1>404 Not Found</h1>'

    //3.判断用户请求的是否为 / 或 /index.html首页 或 /about.html页面
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    } else if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    //4.设置Content-Type响应头，防止中文乱码
    res.setHeader('Content-Type', 'text/html;charset=utf-8');

    //5.res.end响应给客户端
    res.end(content)
})
sever.listen(80, () => {
    console.log('sever running at http://127.0.0.1');
})
