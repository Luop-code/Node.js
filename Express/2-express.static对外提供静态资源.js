const express = require('express')
const app = express()

//对外提供静态资源
//托管多个静态资源目录，则多次调用express.static()
app.use('../', express.static('./'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})