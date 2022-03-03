//导入自定义的格式化时间模块

const TIME = require('./18-格式化时间')

//调用方法，进行时间格式化
const dt = new Date();
console.log(dt);
const newdt = TIME.dateFormat(dt);
console.log(newdt);