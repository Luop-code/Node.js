const express = require('express')
const router = express.Router()

//在这里挂载路由

//get接口
router.get('/get', (req, res) => {
    //通过req.query获取客户端发送的数据
    const query = req.query
    res.send({
        status: 0,              //0表示处理成功，1表示失败
        msg: 'GET请求成功！',  //状态的描述
        data: query             //需要响应给客户端的数据
    })
})


router.post('/post', (req, res) => {
    //通过req.body获取请求体中包含的url-encoded格式的数据
    const body = req.body
    res.send({
        status: 0,              //0表示处理成功，1表示失败
        msg: 'POST请求成功！',  //状态的描述
        data: body             //需要响应给客户端的数据
    })
})

module.exports = router