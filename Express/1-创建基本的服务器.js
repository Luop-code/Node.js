//导入express
const express = require('express')

//创建web服务器
const app = express()

//监听客户端的GET和POST请求，并向客户端响应具体的内容
app.get('/user', (req, res) => {
    //调用express提供的res.send()方法向客户端响应一个json对象
    res.send({ name: 'zs', age: 20, gender: '男' })
})
app.post('/user', (req, res) => {
    //调用express提供的res.send()方法向客户端响应一个文本字符串
    res.send('请求成功')
})

//通过req.query对象，可以访问到客户端通过查询字符串的形式，发送到服务器的参数
app.get('/', (req, res) => {
    console.log(req.query);
    //通过req.query可以获取到客户端发送过来的 查询参数
    //默认情况下，req.query是一个空对象
    res.send(req.query)
})

//这里的 :id是一个动态参数
app.get('/user/:id', (req, res) => {
    //req.params是动态匹配到的 URL参数，默认是一个空对象
    console.log(req.params);
    res.send(req.params)
})

//启动服务器
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})