const luoTools = require('./luo-tools')
const luo = require('./luo-tools')

//格式化时间
const dtStr = luoTools.dateFormat(new Date())
console.log(dtStr);
console.log('-----------');

//html字符串转换
const htmlStr = '<h1 title ="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = luo.htmlEscape(htmlStr)
// console.log(str);
const str2 = luo.htmlUnEscape(str)
console.log(str2);