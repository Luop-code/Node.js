const express = require('express')
const app = express()


const mw1 = (req, res, next) => {
    console.log('调用了第1个局部生效的中间件');
    next()
}
const mw2 = (req, res, next) => {
    console.log('调用了第2个局部生效的中间件');
    next()
}

app.get('/', mw1, mw2, (req, res) => {
    res.send('home page')
})

app.get('/user', [mw1, mw2], (req, res) => {
    res.send('user page')
})

app.listen('80', () => {
    console.log('http://127.0.0.1');
})