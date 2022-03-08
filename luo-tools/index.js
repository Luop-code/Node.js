

//包的入口文件
const date = require('./src/dateFormat')
const escape = require('./src/htmlEscape')


//向外暴露需要的成员
module.exports = {
    // ... 扩展运算符，可展开对象所有属性
    ...date,
    ...escape

}