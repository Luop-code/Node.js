//express中，路由指的是 客户端的请求与服务器处理函数之间的映射关系
//express中的路由分3部分，分别是请求的类型、请求的URL地址、处理函数，格式如下
//app.METHOD(PATH, HANDLER)


const express = require('express')
const app = express()

//挂载路由
app.get('/', (req, res) => {
    res.send('hello world')
})
app.post('/', (req, res) => {
    res.send('post request.')
})

app.listen('80', () => {
    console.log('http://127.0.0.1');
})