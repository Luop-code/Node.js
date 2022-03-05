const luo = require('./luo-tools')

const htmlStr = '<h1 title ="abc">这是h1标签<span>123&nbsp;</span></h1>'

const str = luo.htmlEscape(htmlStr)
// console.log(str);

const str2 = luo.htmlUnEscape(str)
console.log(str2);