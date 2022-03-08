const express = require('express')
const app = express()

//定义中间件函数,必须加next参数
const mw = function (req, res, next) {
    console.log('这是最简单的中间件函数');

    //把流转关系交给下一个中间或路由
    next()
}

//将mw注册为全局生效的中间件
//客户端发起的任何请求，到达服务器后，都会触发的中间件，就是全局生效的中间件
app.use(mw)

//这是全局中间件的简化形式
/* app.use((req, res, next) => {
    console.log('这是最简单的中间件函数');
    next()
})
 */

app.get('/', (req, res) => {
    console.log('调用了/路由');
    res.send('home page.')

})
app.get('/user', (req, res) => {
    console.log('调用了/user路由');
    res.send('user page.');
})


app.listen('80', () => {
    console.log('http://127.0.0.1');
})