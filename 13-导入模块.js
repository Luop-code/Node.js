

//在使用require 加载用户自定义模块期间，可以省略后缀.js

//外界使用require导入自定义模块，得到的成员就是module.export指向的那个对象
//可以使用module.export将模块内的成员共享出去
const m1 = require('./13-自定义模块.js');
console.log(m1);