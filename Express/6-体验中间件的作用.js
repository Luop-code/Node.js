const express = require('express')
const app = express()

//多个中间件之间，共享同一份req、res，可以在上游的中间件中，统一为req，res对象添加自定义属性或方法

app.use((req, res, next) => {
    //获取请求到达服务器的时间
    const time = Date.now()
    //为req对象挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time

    next()
})


app.get('/', (req, res) => {
    res.send('home page.' + req.startTime)

})
app.get('/user', (req, res) => {
    res.send('user page.' + req.startTime);
})


app.listen('80', () => {
    console.log('http://127.0.0.1');
})