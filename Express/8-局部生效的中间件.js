const express = require('express')
const app = express()

//定义中间件函数
//不使用app.use()定义的中间件就是局部生效的中间件

const mw1 = (req, res, next) => {
    console.log('调用了局部生效的中间件');
    next()
}

//创建路由
// mw1只在下面这个路由生效
app.get('/', mw1, (req, res) => {
    res.send('home page')
})

//mw1不会影响这个路由
app.get('/user', (req, res) => {
    res.send('user page')
})

app.listen('80', () => {
    console.log('http://127.0.0.1');
})