const express = require('express')
const app = express()


//注意：除了错误中间件，其余的必须在路由前配置
//通过express.json()这个中间件，解析表单中的json格式的数据
app.use(express.json())

//通过express.urlencoded()这个中间件，来解析表单中的url-encoded格式的数据
app.use(express.urlencoded({ extended: false }))

app.post('/', (req, res) => {
    //在服务器，可以用req.body这个属性，接收客户端发送过来的请求体数据
    //默认情况下，如果不配置解析表单数据的中间件，则req.body默认=undefined
    console.log(req.body);
    res.send('hello')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('ok')
})

app.listen('80', () => {
    console.log('http://127.0.0.1');
})