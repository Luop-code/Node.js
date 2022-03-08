自定义包,发布包，包的模块化拆分&编写包


将格式化时间的功能，拆分到 src/dateFormat.js
将处理HTML字符串的功能拆分到 src/htmlEscape.js
在index.js中，导入两个模块，得到需要向外共享的方法
在index.js中，使用module.exports把对应的方法共享出去
## 安装
```
npm install luo-tools

```

## 导入
```js
const luo=require('luo-tools')
```

## 格式化时间
```js
//调用dateFormat对时间格式化
const dtStr = luoTools.dateFormat(new Date())
console.log(dtStr);
```

## 转义html字符
```js
//带转换的html字符串
const htmlStr = '<h1 title ="abc">这是h1标签<span>123&nbsp;</span></h1>'
//调用htmlEscape方法转换
const str = luo.htmlEscape(htmlStr)
```

## 还原html字符
```js
const str2 = luo.htmlUnEscape(str)
console.log(str2);
```


## 开源协议
ISC